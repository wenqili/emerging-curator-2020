<template>
  <div class="rotating" :class="{ 'is-menu': isMenu }">
    <div class="catalog-grid" :class="{ 'is-menu': isMenu }">
      <!-- Second -->
      <div class="second-row-container">
        <!-- Artists -->
        <div class="DataSection" :class="[{ 'is-active': currentFocus === 'artist'}, currentFocus]">
          <nuxt-link v-if="currentFocus === 'artist'" to="/artists">
            <h3 class="DataSection__sectionTitle">
              Artists
            </h3>
          </nuxt-link>

          <h3 v-else class="DataSection__sectionTitle" @click="currentFocus = 'artist'">
            Artists
          </h3>

          <div v-if="currentFocus === 'artist'" class="DataSection__sectionContainer">
            <!-- Artist name list -->
            <div class="DataSection__col DataSection__leftCol">
              <div>
                <ul>
                  <li v-for="(artist, index) in cleanArtists" :key="artist.id+index" @mouseover="current = artist.name">
                    <!-- <nuxt-link :to="{ name: 'artists-artist', params: { artist: artist.url, id: artist.id }}"> -->
                    <!-- {{ artist.name }} -->
                    <!-- </nuxt-link> -->
                    companies
                  </li>
                </ul>
              </div>
            </div>
          
            <!-- Artwork -->
            <div class="DataSection__col DataSection__midCol DataSection__dataVizCol  is-active">
              <div class="DataSection__richtextContainer">
                <!-- <ArtistsDataViz /> -->
              </div>
            </div>
          </div> <!-- End of sectionContainer -->
        </div>

        <GotoButton route="institutions" :order="1" />
        <GotoButton route="companies" :order="2" />
      </div>
    </div>
    <div class="navi-bar">
      <nav>
        <button class="navi-item" :class="{ 'is-focused': !isMenu }" @click="isMenu = false">
          Index
        </button>
        <nuxt-link to="/" class="navi-item" :class="{ 'is-focused': !isMenu }">
          Home
        </nuxt-link>
        <button class="navi-item" :class="{ 'is-focused': isMenu }" @click="isMenu = true">
          <font-awesome-icon icon="search" />
          Menu
        </button>
      </nav>
      <MenuSection />
    </div>
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
      isMenu: false,
      currentFocus: 'artist',
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
* {
  box-sizing: border-box;
}

.rotating{
  transform-origin: 3rem 3rem;
  transform: rotate(90deg);
  transition: transform .3s ease,-webkit-transform .3s ease;
  width: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  box-sizing: border-box;
}

.rotating.is-menu {
  transform: rotate(0deg) !important;
  // transform: rotate(90deg) translate(0, -100px) !important;
  width: 100vw;
}

.is-menu .navi-bar {
  width: 100vw;
}

.navi-bar {
  width: 100vh;
  position: relative;
  top: 3rem;
  height: calc(100vh - 3rem);
}

.navi-bar nav {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  border-top: black 3px solid;
}

.menu {
  position: relative;
  height: 100%;
}

.navi-item {
  position: relative;
  z-index: 1;
  padding: 0.5rem;
  border: none;
  background: none;
  outline: transparent;
}

.navi-item.is-focused {
  font-weight: 900;
}

.catalog-grid {
  top: 3rem;
  position: absolute;
  width: calc(100vw - 3rem);
  height: 100vh;
  transform: rotate(-90deg);
  transform-origin: left top;
  height: 100vh;
  line-height: 1;
  overflow: hidden;
}

.catalog-grid.is-menu {
  height: 100vw;
}

// First row
.first-row-container {
  display: flex;
  width: calc(100vw - 3rem);
  height: 3rem;

  & > * {
    border-right: black 2px solid;
  /* border-right: black 2px solid; */
    border-bottom: black 2px solid;
    display: flex;
    align-items: center;
    transition: all 200ms linear;
  }
}

.artist-collection {
  width: 3rem;
  border-bottom: none;
  &.is-active {
    border-bottom: 2px black solid;
    flex-grow: 2;
  }
}

.insititution-collection {
  width: 3rem;
  border-bottom: none;
  &.is-active {
    border-bottom: 2px black solid;
    flex-grow: 2;
  }
}

.company-collection {
  width: 3rem;
  border-bottom: none;
  &.is-active {
    border-bottom: 2px black solid;
    flex-grow: 2;
  }
}


// Second row
.second-row-container {
  display: flex;
  width: calc(100vw - 3rem);
  height: calc(100vh - 6rem);
  

  & > * {
    border-right: black 2px solid;
  /* border-right: black 2px solid; */
    border-bottom: black 2px solid;
    display: flex;
    align-items: center;
    transition: all 300ms ease;
  }
}

.is-menu {
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

  &.artist {
    top: 9.2rem;
  }

  &.insititution {
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

a.nuxt-link-active{
  background-color: black;
  color: white;
}

// New CSS style
.DataSection {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 1.2rem;
  padding-left: 2rem;
  // padding-bottom: 1.2rem;
  height: 10.4rem;
  z-index: 1;
  width: 1rem;
  border: none;

  & * {
    transition: ease 300ms all;
  }

  &.is-active {
    left: 0;
    height: 100%;
    z-index: 0;
    width: calc(100vw - 3rem);
  }

  h3 {
    top: 1.2rem;
  }

  &__sectionTitle {
    top: 0;
    left: 1.2rem;
    position: absolute;
    transform-origin: top left;
    transform: rotate(90deg);
    background-color: black;
    color: white;
    width: 8rem;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.3rem;
    cursor: pointer;
    user-select: none;

    &:hover{
      background-color: transparent;
      color: black;
      border: 1px solid black;
    }
  }

  &__sectionContainer {
    width: 100%;
    height: 100%;
    display: flex;
  }

  &__col {
    position: relative;
  }

  &__leftCol {
    width: 30%;
    height: 100%;
  }

  &__midCol {
    height: 100%;
    width: 40%;
    border-left: black solid 3px;
    &.is-active{
      height: 100%;
      width: calc(70% - 2rem);
    }
  }

  &__dataVizCol {
    border-left: none;
  }

  &__rightCol {
    min-width: 2rem;
    height: 100%;
    width: 30%;
    border-left: black solid 3px;

    &.is-blur{
      border-left: none;
      width: 2rem;

      h4 {
        top: 18.4rem;
      }

      .DataSection__textContainer {
        display: none;
        opacity: 0;
      }
    }

    p {
      font-size: 2rem;
    }
  }

  &__richtextContainer {
    overflow: auto;
    height: 100%;
  }

  &__textContainer {
    padding-left: 2rem;
    padding-right: 4rem;
    overflow: auto;
    height: 100%;
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