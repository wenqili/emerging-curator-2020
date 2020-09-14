<template>
  <div class="rotating" :class="{ 'is-menu': isMenu }">
    <div class="catalog-grid" :class="{ 'is-menu': isMenu }">
      <div class="left-banner second-row">
        <button class="main-button">
          > Artists
        </button>
      </div>
      <div class="middle-banner second-row">
        <button class="main-button">
          > Institutions
        </button>
      </div>
      <div class="right-banner second-row last-col">
        <button class="main-button">
          > companies
        </button>
      </div>
      <div class="left-section">
        <ul>
          <li v-for="artist in cleanArtists" :key="artist.id" @mouseover="current = artist.name">
            <nuxt-link :to="{ name: 'artist-artist', params: { artist: artist.id }}">
              {{ artist.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="middle-section">
        <ul>
          <li>Name 1</li>
        </ul>
      </div>
      <div class="right-section last-col">
        <ul>
          <li>Name 1</li>
        </ul>
      </div>
      <div class="grid-footer last-col">
        <h1>Emerging Curators 2020</h1>
        <button class="main-button">
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 3rem repeat(4, 1fr) 3rem;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  line-height: 1;
  /* background-color: aqua; */
}

.catalog-grid.is-menu {
  height: 100vw;
}

.catalog-grid > * {
  border-left: black 2px solid;
  /* border-right: black 2px solid; */
  border-bottom: black 2px solid;
}

.header {
  grid-area: 1 / 1 / 2 / 13;
}

/* Helper */
/* Border */

.second-row {
  display: flex;
  align-items: flex-end;
}

.last-col {
  border-right: none;
}

/* Component */
.main-button {
  border: transparent;
  background-color: transparent;
  font-size: 1rem;
  padding: 0.3rem;
}

.main-button:hover {
  color: white;
  text-decoration: underline;
  font-style: italic;
}

/* First row */
.left-banner {
  grid-area:  1 / 1 / 3 / 5;
  background-color:thistle;
}

.middle-banner {
  grid-area:  1 / 5 / 3 / 9;
  background-color: aquamarine;
}

.right-banner {
  grid-area:  1 / 9 / 3 / 13;
  background-color: burlywood;
}

/* third row */
.left-section {
  grid-area:  3 / 1 / 6 / 5;
  overflow: auto;
}

.middle-section {
  grid-area:  3 / 5 / 6 / 9;
}

.right-section {
  grid-area:  3 / 9 / 6 / 13;
}

.grid-footer {
  grid-area: 6 / 1 / 7 / 13;
}

.grid-footer  h1 {
  float: left;
}

.grid-footer  button {
  float: right;
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

