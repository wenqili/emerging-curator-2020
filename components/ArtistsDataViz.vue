<template>
  <div class="DataViz">
    <OverviewDiagram v-for="cat in artists_data" :key="cat.name" :currentData="cat" @current_list="highlightList" />
  </div>
</template>

<script>
import artists_overview from "~/assets/artists_overview.json"
import OverviewDiagram from "~/components/OverviewDiagram.vue"
export default {
  name: "ArtistsDataViz",
  components:{
    OverviewDiagram
  },
  data(){
    return{
      artists_data: artists_overview
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