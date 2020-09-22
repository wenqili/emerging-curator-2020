<template>
  <div class="DataViz">
    <OverviewDiagram v-for="cat in institution_data" :key="cat.name" :current-data="cat" @current_list="highlightList" />
  </div>
</template>

<script>
import OverviewDiagram from "~/components/OverviewDiagram.vue"
export default {
  name: "InstitutionDataViz",
  components:{
    OverviewDiagram
  },
  data(){
    return{
      institution_data: this.$store.state.localeInstitutionOverview
    } 
  },
  methods:{
    highlightList: function(list){
      this.$emit("highlight_list",list)
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