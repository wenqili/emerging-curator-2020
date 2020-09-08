<template>
  <header>
    <h1 class="title is-1">
      <nuxt-link to="/">
        Emerging Curators
      </nuxt-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  grid-area: 2 / 2 / 3 / 7;
}

h1 {
  font-family: 'Oriya MN';
  font-weight: bolder;
  text-align: right;
}

.nuxt-link-active {
  color: black;
}

h1:active {
  color: black;
}
</style>