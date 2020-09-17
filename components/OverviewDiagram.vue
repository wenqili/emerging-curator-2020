/* eslint-disable semi */
<template>
  <div>
    <svg ref="svgContainer" class="overview-viz" />
  </div>
</template>

<script>
import * as d3 from "d3"

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
      height: 200,
      width: 500,
    }
  },
  mounted() {
    this.createDiagram()
  },
  methods: {
    createDiagram() {
      const data = this.currData

      const DOM = this.$refs.svgContainer

      const x = d3.scaleLinear().rangeRound([0, this.width])
      const y = d3.scaleLinear().rangeRound([0, this.height])

      const svg = d3
        .select(DOM)
        .attr("viewBox", [-5, -30.5, this.width + 10, this.height + 50])
        .style("font-size", "10px sans-serif")


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

      //   node
      //     .filter((d) => (d === root ? d.parent : d.children))
      //     .attr("cursor", "pointer")
      //     .on("click", (event, d) => (d === root ? zoomout(root) : zoomin(d)))

      //   node.append("title").text((d) => `${name(d)}\n${d.value}`)

      node
        .append("rect")
        // .attr("id", (d) => (d.leafUid = DOM.uid("leaf")).id)
        .attr("fill", (d) => (d === root ? "#000" : "#fff"))
        //d => d === root ? "#000" : d.children ? "#fff" : "#fff"
        .attr("stroke", "#000")

      node
        .append("text")
        // .attr("clip-path", d => d.clipUid)
        .attr("font-weight", (d) => (d === root ? "bold" : null))
        .attr("fill", (d) => (d === root ? "#fff" : "#000"))
        .selectAll("tspan")
        .data((d) => (d === root ? `${d.ancestors().reverse().map(d => d.data.name).join(" | ")}` : `${d.data.name}`).split(","))
        .join("tspan")
        // .attr("x", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
        .attr("x", 3)
        .attr("y", `1em`)
        .attr("padding-left", "10px")
        // .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
        // .attr("font-weight", (d, i, nodes) => i === nodes.length - 1 ? "normal" : null)
        .text((d) => d)

      node
        .append("text")
        .attr("font-weight", "bold")
        .attr("fill", (d) => (d === root ? "#fff" : "#000"))
        .attr("font-size", "30px")
        .attr("margin-left", "5px")
        .selectAll("tspan")
        .data((d) => (d === root ? `` : `${d.value}`))
        .join("tspan")
        .attr(
          "x",
          (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 0.2 + i * 0.6}em`
        )
        .attr("y", `1.1em`)
        // .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
        // .attr("font-weight", (d, i, nodes) => i === nodes.length - 1 ? "normal" : null)
        .text((d) => d)

      group
        .selectAll("g")
        .attr("transform", (d) =>
          d === root ? `translate(0,-30)` : `translate(${x(d.x0)},${y(d.y0)})`
        )
        .select("rect")
        .attr("width", (d) => (d === root ? this.width : x(d.x1) - x(d.x0)))
        .attr("height", (d) => (d === root ? 30 : y(d.y1) - y(d.y0)))
    },
  },
}
</script>

<style scoped>
</style>