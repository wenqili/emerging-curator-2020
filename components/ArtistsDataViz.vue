<template>
  <div class="DataViz">
    <OverviewDiagram v-for="cat in artists_data" :key="cat.name" :current-data="cat" @current_list="highlightList" />
  </div>
</template>

<script>
import OverviewDiagram from "~/components/OverviewDiagram.vue"
export default {
  name: "ArtistsDataViz",
  components:{
    OverviewDiagram
  },
  data(){
    return{
      artists_data: this.$store.state.localeArtistsOverview
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
  width: 100%;
  height: 100%;
  padding-right: 2rem;
}
</style>