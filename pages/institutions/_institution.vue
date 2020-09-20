<template>
  <div class="rotating" :class="{ 'onMenu': onMenu }">
    <div class="catalog-grid" :class="{ 'onMenu': onMenu }">
      <div class="second-row-container">
        <Slide 
          :category="{
            left: 'institutions',
            middle: 'information',
            right: 'research',
          }" 
          :current-focus="currentFocus" 
          @focus-on-slide="currentFocus = 'institutions'"
        />

        <GotoButton route="artists" :order="1" />
        <GotoButton route="companies" :order="2" />
      </div>
    </div>

    <NaviBar 
      @toggle-menu="onMenu = !onMenu" 
      @toggle-off-menu="onMenu = false"
    />
  </div>
</template>

<script>
import artists from "../../assets/artists.json"
let cleanArtists = [...new Set(artists)]

export default {
  layout: 'catalog',
  components: {
    
  },
  data: function() {
    return {
      cleanArtists,
      onMenu: false,
      currentFocus: 'institutions',
      name: 'test',
    }
  },
  created() {
    this.name = this.$route.params.artist
  },
  methods: {
    toggleArtwork: function() {
      document.getElementById('artwork').classList.toggle('is-active')
      document.getElementById('artinfo').classList.toggle('is-blur')
    },
  },
  head() {
    return {
      title: "Emerging Curators 2020",
      meta: [{
        hid: "descriptions",
        name: "descriptions",
        content: "descriptions"
      }]
    }
  }
}
</script>

<style lang="scss" scoped>


// Second row
.second-row-container {
  display: flex;
  width: calc(100vw - 3rem);
  height: calc(100vh - 6rem);
  

  & > * {
    border-right: black 2px solid;
    display: flex;
    align-items: center;
    transition: all 300ms ease;
  }
}

.onMenu {
  .second-row-container {
    height: calc(100vw - 6rem) !important;
  }
}

.middle-section {

  &.is-active {
  }

  &.company {
    top: 9.2rem;
  }
}

.right-section {
 
  &.is-active {
  }

  &.Artist {
    top: 9.2rem;
  }

  &.Insititutions{
    top: 9.2rem;
  }
}

li {
  font-size: 2rem;

  a {
    padding: 0.25rem 0.5rem;
    display: block;
    width: 100%;

    &:active {
    }
  }

}

figure {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  
  img {
    width: 100%;
  }
}
</style>

