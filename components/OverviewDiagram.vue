/* eslint-disable semi */
<template>
  <div>
    <svg ref="svgContainer" class="overview-viz" />
  </div>
</template>

<script>
import * as d3 from "d3"
import * as d3plus from "d3plus-text"

export default {
  name: "OverviewDiagram",
  props: {
    currentData: {
      type: Object,
      default: function () {
        return { name: "", children: [] }
      },
    },
  },
  data() {
    return {
      currData: this.currentData,
      height: 380,
      width: 1288,
    }
  },
  mounted() {
    this.createDiagram()
  },
  methods: {
    createDiagram() {
      const data = this.currData

      const DOM = this.$refs.svgContainer

      const x = d3.scaleLinear().rangeRound([0, this.width-5])
      const y = d3.scaleLinear().rangeRound([0, this.height-22.5])

      const svg = d3
        .select(DOM)
        .attr("viewBox", [-5, -30.5, this.width + 10, this.height + 50])
        // .style("font-size", "10px sans-serif")


      const root = d3.treemap().tile(d3.treemapSquarify)(
          d3
            .hierarchy(data)
            .sum((d) => d.value)
            .sort((a, b) => b.value - a.value)
        )

      let group = svg.append("g")
      const node = group
        .selectAll("g")
        .data(root.children.concat(root))
        .join("g")

        node
          .filter((d) => (d === root ? d.parent : d.children))
      //     .attr("cursor", "pointer")
      //     .on("click", (event, d) => (d === root ? zoomout(root) : zoomin(d)))

      //   node.append("title").text((d) => `${name(d)}\n${d.value}`)

      node
        .append("rect")
        .attr("class","tile")
        // .attr("ref", d => (d.nodeUid = DOM.uid("node")).id) 
        // .attr("id", (d) => (d.leafUid = DOM.uid("leaf")).id)
        // .attr("fill", (d) => (d === root ? "none" : "#fff"))
        .attr("fill", "none")
        //d => d === root ? "#000" : d.children ? "#fff" : "#fff"
        .attr("stroke", (d) => (d === root ? "none" : "#000"))
        .attr("stroke-width","2.5px")
    
    // let bbox = node.node().getBBox()
    // console.log(bbox)

      node
        .append("text")
        // .attr("clip-path", d => d.clipUid)
        .attr("class","option")
        .attr("font-weight", (d) => (d === root ? "bold" : null))
        .attr("font-size", (d) => (d === root ? "32px" : "19.2px"))
        .attr("fill", "#000")
        .attr("y", (d) => (d === root ? "22.5px" : "28px"))
        .each(
            (d)=>{
                console.log(x(d.x1) - x(d.x0))
                let breakText = d3plus.textWrap().width((x(d.x1) - x(d.x0))*0.5)(`${d.data.name}`)
                console.log(breakText.lines)
                }
            )
        .selectAll("tspan")

        .data((d) => d3plus.textWrap().width((x(d.x1) - x(d.x0))*0.45)(`${d.data.name}`).lines)

        .join("tspan")
        // .attr("x", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
        .attr("x", 3)
        .attr("dx","15")
        .attr("dy", (d,i) =>`${(i!=0)*25}`)
        // .attr("dy","22.5")
        // .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
        // .attr("font-weight", (d, i, nodes) => i === nodes.length - 1 ? "normal" : null)
        .text((d) => d)
        

      node
        .append("text")
        .attr("class","count")
        .attr("font-weight", "bold")
        .attr("fill", (d) => (d === root ? "#fff" : "#000"))
        .attr("font-size", "32px")
        // .each((d)=>{console.log(x(d.x1) - x(d.x0))})
        // .attr("x", (d, i, nodes) => `${(i === nodes.length)+18*i}px`)
        .attr("transform",(d)=>`translate(${x(d.x1) - x(d.x0)-17},0)`)
        .attr("text-anchor","end")
        // .attr("margin-left", "5px")
        .selectAll("tspan")
        .data((d) => ((d === root ? `` : `${d.value}`).split("$")))
        .join("tspan")
        // .attr("dx",`${bbox.width}`)
        // .attr("x",(d)=>x(d.x1) - x(d.x0))
        
        .attr("y", "28px")
        
        .text((d) => d)

      group
        .selectAll("g")
        .attr("transform", (d) =>
          d === root ? `translate(-15,-25)` : `translate(${x(d.x0)},${y(d.y0)+29})`
        )
        .select("rect")
        .attr("width", (d) => (d === root ? this.width : x(d.x1) - x(d.x0)))
        .attr("height", (d) => (d === root ? 30 : y(d.y1) - y(d.y0)))
        // .call( (d)=>{
        //     d3.selectAll('text.count')
        //     .attr("transform", `translate(${x(d.x1) - x(d.x0)},0)`)
        // }
        // )
        // .attr("transform")
        // .select(".count")
        // .attr("padding-left", (d) =>`${x(d.x0)}`)
        // .call()

        
    },
  },
}
</script>

<style scoped>
    .overview-viz{
        padding-top: 10px;
    }

    .tile{
        stroke-width: 5px;
    }
</style>