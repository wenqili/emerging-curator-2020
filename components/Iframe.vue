<template>
  <div>
    <div class="iframeContainer">
      <iframe :src="src" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
    </div>

    <div>{{ src }}</div>
  </div>
</template>
<script>
export default {
  name: 'Iframe',
  props: {
    src: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss" scoped>
.iframeContainer{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>