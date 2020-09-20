<template>
  <div class="contentBlock">
    <p>{{ caption }}</p>
  </div>
</template>
<script>
export default {
  name: "LinkBlock",
  props: {
    src: {
      type: String,
      default: '',
    },    
    caption: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  padding: 0 2rem;
  margin-bottom: 1rem;
}
</style>