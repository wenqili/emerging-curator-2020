<template>
  <div class="DataViz">
    <div v-for="cat in artists_data" :key="cat.name">
      <OverviewDiagram :current-data="cat" />
      <!-- {{cat}} -->
    </div>
  </div>
</template>

<script>
import artists_overview from "~/assets/artists_overview.json"
import OverviewDiagram from "~/components/OverviewDiagram.vue"
export default {
  name: "InstitutionDataViz",
  components:{
    OverviewDiagram
  },
  data(){
    return{
      artists_data: artists_overview
    }
    
  }
}
</script>

<style lang="scss" scoped>
.DataViz{
  overflow: auto;
  padding-right: 2rem;
  width: 100%;
  height: 100%;
}
</style>