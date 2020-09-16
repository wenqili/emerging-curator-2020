<template>
  <div class="rotating" :class="{ 'is-menu': isMenu }">
    <div class="catalog-grid" :class="{ 'is-menu': isMenu }">
      <!-- First -->
      <div class="first-row-container ">
        <div v-if="currentFocus === 'artist'" class="artist-collection" :class="{ 'is-active': currentFocus === 'artist'}" @click="currentFocus = 'artist'">
          Artists
        </div>
        <div v-else class="artist-collection" :class="{ 'is-active': currentFocus === 'artist'}" />

        <div v-if="currentFocus === 'artist'" class="artist-collection" :class="{ 'is-active': currentFocus === 'artist'}" @click="currentFocus = 'artist'">
          Artwork
        </div>

        <div v-if="currentFocus === 'artist'" class="artist-collection" :class="{ 'is-active': currentFocus === 'artist'}" @click="currentFocus = 'artist'">
          information
        </div>


        <div v-if="currentFocus === 'insititution'" class="insititution-collection" :class="{ 'is-active': currentFocus === 'insititution'}" @click="currentFocus = 'insititution'">
          Institutions
        </div>
        <div v-else class="insititution-collection" :class="{ 'is-active': currentFocus === 'insititution'}" />

        <div v-if="currentFocus === 'company'" class="company-collection" :class="{ 'is-active': currentFocus === 'company'}" @click="currentFocus = 'company'">
          companies
        </div>
        <div v-else class="company-collection" :class="{ 'is-active': currentFocus === 'company'}" />
      </div>

      <!-- Second -->
      <div class="second-row-container">
        <div class="left-section" :class="{ 'is-active': currentFocus === 'artist'}">
          <!-- Artists -->
          <div v-if="currentFocus === 'artist'" class="artist-section artist-section-list">
            <div>
              <ul>
                <li v-for="artist in cleanArtists" :key="artist.id" @mouseover="current = artist.name">
                  <nuxt-link :to="{ name: 'artist-artist', params: { artist: artist.id }}">
                    {{ artist.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div v-else class="section-title" @click="currentFocus = 'artist'">
            <h3>
              Artists
            </h3>
          </div>

          <div v-if="currentFocus === 'artist'" class="artist-section artist-section-list">
            <div>
              <ul>
                <li v-for="artist in cleanArtists" :key="artist.id" @mouseover="current = artist.name">
                  <nuxt-link :to="{ name: 'artist-artist', params: { artist: artist.id }}">
                    {{ artist.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div v-if="currentFocus === 'artist'" class="artist-section artist-section-list">
            <div>
              <ul>
                <li v-for="artist in cleanArtists" :key="artist.id" @mouseover="current = artist.name">
                  <nuxt-link :to="{ name: 'artist-artist', params: { artist: artist.id }}">
                    {{ artist.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Insititution -->
        <div class="middle-section" :class="{ 'is-active': currentFocus === 'insititution'}">
          <ul v-if="currentFocus === 'insititution'">
            <li>Name 1</li>
          </ul>
          <div v-else class="section-title" @click="currentFocus = 'insititution'">
            <h3>
              Insititution
            </h3>
          </div>
        </div>

        <!-- Company -->
        <div class="right-section" :class="{ 'is-active': currentFocus === 'company'}">
          <ul v-if="currentFocus === 'company'">
            <li>Name 1</li>
          </ul>
          <div v-else class="section-title" @click="currentFocus = 'company'">
            <h3>
              companies
            </h3>
          </div>
        </div>
      </div>

      <!-- Third -->
      <div class="grid-footer">
        <h1>
          <nuxt-link to="/#">
            Emerging Curators 2020
          </nuxt-link>
        </h1>
        <button>
          EN/CN
        </button>
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
  border-top: black 2px solid;
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

.menu-content {
  position: absolute;
  top: 3rem;
  bottom: 0;
  /* background-color: #fff; */
  /* height: 100%; */
  width: 100%;
  /* filter: blur(4px); */
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
}

.catalog-grid.is-menu {
  height: 100vw;
}

.header {
  grid-area: 1 / 1 / 2 / 13;
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
    background-color:thistle;
  }
}

.insititution-collection {
  width: 3rem;
  border-bottom: none;
  &.is-active {
    border-bottom: 2px black solid;
    flex-grow: 2;
    background-color: aquamarine;
  }
}

.company-collection {
  width: 3rem;
  border-bottom: none;
  &.is-active {
    border-bottom: 2px black solid;
    flex-grow: 2;
    background-color: burlywood;
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
    transition: all 200ms linear;
  }
}

.is-menu {
  .second-row-container {
    height: calc(100vw - 6rem) !important;
  }
}

.left-section {
  position: relative;
  overflow: auto;
  width: 3rem;
  display: flex;
  &.is-active {
    flex-grow: 2;
  }
}

.artist-section {
  flex-grow: 2;
  height: 100%;
  border-right: 2px black solid;

  &:last-child {
    border-right:none;
  }
}

.middle-section {
  position: relative;
  width: 3rem;
  &.is-active {
    flex-grow: 2;
    background-color: aquamarine;
  }
}

.right-section {
  position: relative;
  width: 3rem;
  &.is-active {
    flex-grow: 2;
    background-color: burlywood;
  }
}

.section-title {
  cursor: pointer;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  top: -3rem;
  height: calc(100% + 3rem);
  // height: 100%;
  & h3 {
    transform: rotate(90deg);
    transform-origin: 1.5rem;
  }
}

.grid-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 0.5rem;
  
  button {
    border: none;
    background-color: transparent;
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

  &:hover {
    background-color: black;
    transform: scale(-1, 1); 
    transform-origin: 1 1;
    // color:red; 
    a {
      color: white;
    }
    
  }
}

a.nuxt-link-active{
  background-color: black;
  color: white;
}

.flip_H { 
  transform: scale(-1, 1); 
  color:red; 
}

</style>

