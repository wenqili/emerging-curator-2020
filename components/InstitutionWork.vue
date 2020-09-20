<template>
  <div>
    <Photo :src="`/institution/${institutionId}/1.png`" />
    <Photo :src="`/institution/${institutionId}/2.png`" />
    <Photo :src="`/institution/${institutionId}/3.png`" />
  </div>
</template>
<script>
export default {
  name: 'InstitutionWork',
  props: {
    institutionId: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss" scoped>

</style>