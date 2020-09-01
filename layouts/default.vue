<template>
  <div>
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
  components: {
    AppHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 1rem;
  line-height: 1.6;
}

</style>