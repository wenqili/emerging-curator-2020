<template>
  <div class="rotating" :class="{ 'is-menu': isMenu }">
    <div class="catalog-grid" :class="{ 'is-menu': isMenu }">
      <!-- First -->
      <div class="first-row-container ">
        <div class="left-section">
          <figure>
            <img src="~/static/placeholder1.jpeg">
          </figure>
        </div>

        <div class="middle-section">
          <figure>
            <img src="~/static/placeholder3.png">
          </figure>
        </div>

        <div class="right-section">
          <figure>
            <img src="~/static/placeholder5.png">
          </figure>
        </div>
      </div>

      <!-- Second -->
      <div class="second-row-container">
        <!-- Artists -->

        <div class="IndexSection left-section">
          <nuxt-link to="/artists">
            <h3 class="IndexSection__sectionTitle">
              Artists
            </h3>
          </nuxt-link>

          <div class="IndexSection__sectionContainer">
            <!-- Artist name list -->
            <div class="IndexSection__col IndexSection__leftCol">
              <div class="IndexSection__richtextContainer">
                <ul>
                  <li v-for="(artist, index) in cleanArtists" :key="artist.id+index" :class="{ 'is-activeHover': currentArtist === artist }" @mouseover="currentArtist = artist"> 
                    {{ artist.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div> <!-- End of sectionContainer -->
        </div>

        <!-- Institution -->
        <div class="IndexSection middle-section">
          <h3 class="IndexSection__sectionTitle">
            <nuxt-link to="/institutions">
              Institutions
            </nuxt-link>
          </h3>
          
          <!-- Institution list -->
          <div class="IndexSection__col IndexSection__leftCol">
            <div class="IndexSection__richtextContainer">
              <ul>
                <li v-for="(artist, index) in cleanArtists" :key="artist.id+index" :class="{ 'is-activeHover': currentArtist === artist }" @mouseover="currentArtist = artist"> 
                  {{ artist.residency }}
                </li>
              </ul>
            </div>
          </div>
        </div> <!-- end of Institution -->

        <!-- Company -->
        <div class="IndexSection right-section">
          <h3 class="IndexSection__sectionTitle">
            <nuxt-link to="/companies">
              Companies
            </nuxt-link>
          </h3>
          
          <!-- Company list -->
          <div class="IndexSection__col IndexSection__leftCol">
            <div class="IndexSection__richtextContainer">
              <ul>
                <li v-for="(artist, index) in cleanArtists" :key="artist.id+index" :class="{ 'is-activeHover': currentArtist === artist }" @mouseover="currentArtist = artist"> 
                  {{ artist.institution }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navi-bar">
      <nav>
        <button class="navi-item" :class="{ 'is-focused': !isMenu }" @click="isMenu = false">
          Index
        </button>
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
import artists from "../assets/artists.json"
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
      currentArtist: {},
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
  height: 48%;
  
  & > * {
    display: flex;
    align-items: center;
    transition: all 200ms linear;
  }
}

// Second row
.second-row-container {
  display: flex;
  width: calc(100vw - 3rem);
  height: calc(100vh - 48%);

  & > * {
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

.left-section {
  width: 28%;
}

.middle-section {
  width: 44%;
  border-left: 3px black solid;
}

.right-section {
  width: 28%;
  border-left: 3px black solid;
}

li {
  font-size: 1.5rem;
  user-select: none;
  margin-bottom: 0.2rem;
  a {
    padding: 0.25rem 0.5rem;
    display: block;
    width: 100%;

    &:active {
    }
  }
}

.is-activeHover {
  background: black;
  color: white;
}

a.nuxt-link-active{
  background-color: black;
  color: white;
}

// New CSS style
.IndexSection {
  position: relative;
  top: 0;
  right: 0;
  padding-top: 1.2rem;
  padding-left: 2rem;
  // padding-bottom: 1.2rem;
  height: 10.4rem;
  z-index: 1;
  // width: 1rem;
  height: 100%;
  
  // & * {
  //   transition: ease 300ms all;
  // }

  &.is-active {
    left: 0;
    
    z-index: 0;
    // width: calc(100vw - 3rem);
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
    height: 100%;
  }

  &__leftCol {
    width: 100%;
  }

  &__midCol {
    height: 100%;
    width: 40%;
    border-left: black solid 3px;
  }

  &__rightCol {
    min-width: 2rem;
    height: 100%;
    width: 30%;
    border-left: black solid 3px;
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
  width: 100%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>