<template>
  <div class="contentBlock">
    <h2>{{ name }}</h2>
    <h3>Medium</h3>
    <p>{{ medium }}</p>
    <h3>Description</h3>
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'FeatureBlock',
  props: {
    name: {
      type: String,
      default: '',
    },
    medium: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  padding: 0 2rem;
  font-size: 2rem;
  margin-bottom: 1rem;
}

h3 {
  padding: 0 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

p {
  padding: 0 2rem;
  margin-bottom: 1rem;
}
</style>