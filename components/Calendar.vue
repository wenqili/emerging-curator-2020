<template>
  <div class="cal">
    <div v-for="(n, index) in 28" :key="index" class="item" :class="{'is-active': n === 10 || n === 19 || n === 20 }">
      <h4>日期</h4>
      <p>2020年10月{{ n }}日</p>
      <p v-if="n === 10">
        Trigger critique 马拉松
      </p>
      <p v-if="n === 19">
        Pioneer Works
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calendar'
}
</script>
<style lang="scss" scoped>
.cal{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
}

.item {
  border-top: 1px solid black;
  border-left: 1px solid black;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  &.is-active {
    background: black;
    color: white;
  }
}

</style>