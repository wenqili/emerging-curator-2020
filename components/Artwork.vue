<template>
  <div>
    <div>Artwork</div>
    <div>{{ artist.id }}</div>
    <div><Iframe :src="main[0].src" /></div>
  </div>
</template>
<script>
import projects from '../assets/project.json'
import artists from '../assets/artists.json'
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
      artists,
      project: {},
      projects,
      artist: {},
      main: [],
    }
  },
  created: function() {
    this.artist = artists.find(artist => artist.id === this.artistId)
    this.project = this.projects.find(project => project.projectid === this.artist.projects)
    console.log(this.project)
    this.main.push(this.parseType(this.project.projectname, this.project.type, this.project.link))
    console.log(this.main)
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
        case 'image':
          break
        case 'link':
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