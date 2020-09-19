<template>
  <div class="DataViz">
    <OverviewDiagram v-for="cat in institution_data" :key="cat.name" :current-data="cat" @current_list="highlightList" />
  </div>
</template>

<script>
import institution_overview from "~/assets/institution_overview.json"
import OverviewDiagram from "~/components/OverviewDiagram.vue"
export default {
  name: "InstitutionDataViz",
  components:{
    OverviewDiagram
  },
  data(){
    return{
      institution_data: institution_overview
    } 
  },
  methods:{
    highlightList: function(list){
      this.$emit("highlight_list",list)
      // console.log(list)
    }
  }
}
</script>

<style lang="scss" scoped>
.DataViz{
  overflow: auto;
  // background-color: yellowgreen;
  width: 100%;
  height: 100%;
}


</style>