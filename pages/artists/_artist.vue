<template>
  <main>
    <AppHeader />
    <NaviBar theme="light" />
    <div class="canvas-left">
      <p>Canvas Placeholder</p>
    </div>
    <div class="canvas-right section">
      <div class="content">
        <h3 class="title is-3">{{ data.name }}</h3>
        <p class="">{{ data.intro }}</p>
        <figure class="image is-fullwidth ml-0 mt-0">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
      </div>
    </div>

    <SubNavi />
  </main>
</template>

<script>
import archives from "../../assets/projects.json"
export default {
  // key(route) {
  //   console.log("this is router",{route})
  //   return route.fullPath
  // },
  data() {
    return {
      name: "",
      archives,
    }
  },
  created() {
    this.name = this.$route.params.artist
    this.data = archives.archives[this.name]
      ? archives.archives[this.name]
      : {}
    console.log({ name: this.name, data: this.data })
  },
}
</script>

<style scoped>
.canvas-left {
  grid-area: 3 / 2 / 7 / 4;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
}

.canvas-right {
  grid-area: 3 / 4 / 7 / 7;
  border: 5px solid black;
  overflow: auto;
}

h3 {
  border-bottom: 5px solid black;
  line-height: 1.5;
}

p {
  line-height: 1.2;
}
</style>