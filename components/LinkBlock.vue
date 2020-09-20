<template>
  <div class="linkContainer">
    <a :href="src">{{ caption }}</a>
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
.linkContainer {
  padding: 0 2rem;
  margin-bottom: 1rem;
  
  a {
    background: black;
    color: white;
    padding: 0.2rem 0;
    line-height: 1.1;
    &:hover {
      background: white;
      color: black;
    }
  };
}
</style>