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
        .attr('pointer-events', 'all')
        .attr("class",(d)=>(d===root?"root-tile":"tile"))

      node
        .append("rect")
        // .attr("class",(d)=>(d===root?"root-tile":"tile"))
        .attr("stroke", (d) => (d === root ? "none" : "#000"))
        .attr("stroke-width","0.18em")
        .attr("fill", (d) => (d === root ? "none" : this.onHover?"#000":"none"))
      // When the mouse moves over a rect
      // .on('mouseover', (d, i, arr) => {
    
      //   d3.select(arr[i])
      //     // .transition()
      //     // .duration(100)
      //     .attr('fill', '#000')
    
      // })
      // // When the mouse leaves a rect
      // .on('mouseout', (d, i, arr) => {
    
      //   d3.select(arr[i])
      //     // .transition()
      //     // .duration(2000)
      //       .attr('fill', '#fff')
    
      // })

      node
        .append("text")
        .attr("class","option")
        .attr("font-weight", (d) => (d === root ? "bold" : null))
        .attr("font-size", (d) => (d === root ? "32px" : "19.2px"))
        .attr("fill", "#000")
        .attr("y", (d) => (d === root ? "22.5px" : "32px"))
        .selectAll("tspan")
        .data((d) => d3plus.textWrap().width((x(d.x1) - x(d.x0))*0.45)(`${d.data.name}`).lines)

        .join("tspan")
        .attr("x", 3)
        .attr("dx","15")
        .attr("dy", (d,i) =>`${(i!=0)*25}`)
        .text((d) => d)
        

      node
        .append("text")
        .attr("class","count")
        .attr("font-weight", "bold")
        .attr("fill", "#000")
        .attr("font-size", "32px")
        .attr("y", "37px")
        .attr("transform",(d)=>`translate(${x(d.x1) - x(d.x0)-17},0)`)
        .attr("text-anchor","end")
        .selectAll("tspan")
        .data((d) => ((d === root ? `` : `${d.value}`).split("$")))
        .join("tspan")
        .text((d) => d)



      group
        .selectAll("g")
        .attr("transform", (d) =>
          d === root ? `translate(-15,-25)` : `translate(${x(d.x0)},${y(d.y0)+29})`
        )
        .select("rect")
        .attr("width", (d) => (d === root ? this.width : x(d.x1) - x(d.x0)))
        .attr("height", (d) => (d === root ? 30 : y(d.y1) - y(d.y0)))
        // .attr("fill", (d) => (d === root ? 30 : y(d.y1) - y(d.y0)))
        .on('mouseover', (event, d) => {
            this.$emit('current_list',d === root ?[]: d.data.children.map(each=>each.name))
            })
        .on('mouseout', (event, d) => {
            this.$emit('current_list',d === root ?[]: [])
            })
    },
  },
}
</script>

<style>
    .overview-viz{
        padding-top: 10px;
    }

    /* svg >rect{
        stroke-width: 15px;
    } */
    g.tile:hover>rect{
      fill:#000;
    }
    g.tile:hover>text{
      fill:#fff;
    }
</style>