<template>
  <div class="contentBlock">
    <figure class="imageContainer">
      <img :src="src">
    </figure>
    <figcaption>{{ caption }}</figcaption>
  </div>
</template>
<script>
export default {
  name: 'Photo',
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
.imageContainer{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  margin-bottom: 0.5rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

figcaption{
  padding: 0 2rem;
}
</style>