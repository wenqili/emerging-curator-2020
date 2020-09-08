<template>
  <div class="canvas"></div>
</template>

<script>
export default {
  name: "Canvas",
  // props:{
  //   theme: {
  //     type: String,
  //     default: "dark",
  //   },
  // },
  // computed: {
  //   cssProps() {
  //     console.log(this.theme)
  //     return {
  //       '--nav-bg-color': this.theme === "dark" ? "black" : "white",
  //     }
  //   }
  // }
}
</script>

<style scoped>
.canvas{
  grid-area: 3 / 2 / 7 / 7;
  border: 5px solid black;
  border-left: none;
}

.canvas-left {
  grid-area: 3 / 2 / 7 / 4;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
}

.canvas-right {

}
</style>