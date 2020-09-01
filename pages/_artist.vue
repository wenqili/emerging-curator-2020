<template>
  <main>
    <TheNavigation />
    <h1>
      {{ name }}
    </h1>
    <p>
      {{ artistUrl }}
    </p>
  </main>
</template>

<script>
// console.log(props.route)
export default {
  // key(route) {
  //   console.log("this is router",{route})
  //   return route.fullPath
  // },
  data() {
    return {
      name: '',
      artistUrl: '',
    }
  },
  created() {
    console.log("toute",this.$route)
    this.name = this.$route.params.artist
    this.artistUrl = this.$route.params.data.artistURL
  },
}
// let path = 0
</script>