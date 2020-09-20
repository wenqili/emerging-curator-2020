<template>
  <div>
    <figure v-for="(company,idx) in companies" :key="idx" :class="{
      'is-active': `${company.companyid}` === current
    }"
    >
      <!-- <p>{{ company.company }}</p> -->
      <div :style="'backgroundImage: url(/company/'+company.companyid+'/1.png)'" />
    </figure>
  </div>
</template>
<script>
import companies from "../assets/companies.json"

export default {
  name: 'CompanyDataViz',
    props: {
      current: {
        type: String,
        default: '0'
      }
    },
    data: function () {
      return {
        companies,
      }
    }
}
</script>
<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
div {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  padding-left: 3rem;
}
figure {
  width: 30%;
  height: 10rem;
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
  & div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  &.is-active {
    border: 3px solid black;
  }
}
</style>