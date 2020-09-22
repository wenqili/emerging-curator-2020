<template>
  <div>
    <FeatureBlock 
      :name="project.projectname"
      :year="project.year"
      :medium="project.medium"
      :description="project.description"
    />
    <div v-for=" (block, index) in main" :key="index">
      <WritingBlock v-if="block.type === 'text'" :src="block.src" :caption="block.text" />
      <Iframe v-else-if="block.type=== 'video'" :src="block.src" :caption="block.text" />
      <Photo v-else-if="block.type=== 'image'" :src="block.src" :caption="block.text" />
      <LinkBlock v-else-if="block.type === 'link'" :src="block.src" :caption="block.text" />
    </div>
    <div />
  </div>
</template>
<script>
export default {
  name: 'Artwork',
  props: {
    artistId: {
      type: String,
      default: '',
    }
  },
  data: function() {
    return {
      artists: this.$store.state.localeArtistData,
      project: {},
      projects: this.$store.state.localeProjectData,
      artist: {},
      main: [],
    }
  },
  created: function() {
    this.artist = this.artists.find(artist => artist.id === this.artistId)
    this.project = this.projects.find(project => project.projectid === this.artist.projects)
    this.main.push(this.parseType(this.project.projectname, this.project.type, this.project.link))
    for(var i = 1; i < 7; i++) {
      if(this.project[`asset${i}`] !== null){
        this.main.push(this.parseType(this.project[`asset${i}`], this.project[`asset${i}type`], this.project[`asset${i}link`]))
      }
    }
  },
  methods: {
    parseType: function(asset, type, link) {
      let project = {}
      switch(type) {
        case 'video':
          project.src = link
          project.type = 'video'
          project.text = asset
          break
        case 'photo':
          project.src = `/images/${link}`
          project.type = 'image'
          project.text = asset
          break
        case 'link':
          project.src = link
          project.type = 'link'
          project.text = asset
          break
        case 'text':
          project.src = ''
          project.type = 'text'
          project.text = asset
          break
        default:
          break
      }
      return project
    }
  }
}
</script>
<style lang="scss" scoped>

</style>