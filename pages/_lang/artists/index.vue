
<template>
  <div class="rotating" :class="{ 'onMenu': onMenu }">
    <div class="catalog-grid" :class="{ 'onMenu': onMenu }">
      <div class="second-row-container">
        <div class="DataSection is-active">
          <nuxt-link to="/artists">
            <h3 class="DataSection__sectionTitle">
              {{ $t('links.artists') }}
            </h3>
          </nuxt-link>

          <div class="DataSection__sectionContainer">
            <!-- Artist name list -->
            <div class="DataSection__col DataSection__leftCol">
              <ul>
                <li v-for="(artist, index) in artists" 
                    :key="artist.id+index" 
                    :class="[{'highlight':showHighlight.includes(artist.name)}, 'no-highlight']" 
                >
                  <!-- <nuxt-link :to="{ name: 'artists-artist', params: { artist: artist.url, id: artist.id, lang: $i18n.locale } }">
                    {{ artist.name }}
                  </nuxt-link> -->
                  <nuxt-link :to="$i18n.path('artists/'+artist.url)">
                    {{ artist.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          
            <!-- Data Viz -->
            <div class="DataSection__col DataSection__midCol DataSection__dataVizCol  is-active">
              <div class="DataSection__richtextContainer">
                <ArtistsDataViz @highlight_list="showList" />
              </div>
            </div>
          </div> <!-- End of sectionContainer -->
        </div>

        <GotoButton route="institutions" :order="1" />
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
export default {
  layout: 'catalog',
  data: function() {
    return {
      artists: this.$store.state.localeArtistData,
      onMenu: false,
      currentFocus: '',
      showHighlight:[],
    }
  },
  methods: {
    toggleArtwork: function() {
      document.getElementById('artwork').classList.toggle('is-active')
      document.getElementById('artinfo').classList.toggle('is-blur')
    },
    showList: function(list){
      this.showHighlight = list
    }
  }
}
</script>

<style lang="scss" scoped>

li{
  transition: ease 300ms all;
  &:hover {
    background: black;
    color: white;
    a {
      color: white;
    }
  }
}


// Second row
.second-row-container {
  display: flex;
  width: calc(100vw - 3rem);
  height: calc(100vh - 6rem);

  & > * {
    border-right: black 2px solid;
    border-bottom: black 2px solid;
    display: flex;
    align-items: center;
  }
}

.is-menu {
  .second-row-container {
    height: calc(100vw - 6rem) !important;
  }
}

// New CSS style
.DataSection {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 1.2rem;
  padding-left: 2rem;
  height: 10.4rem;
  z-index: 1;
  width: 2.2rem;
  border: none;

  &.is-active {
    left: 0;
    height: 100%;
    z-index: 0;
    width: var(--data-container-active);
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
      width: 70%;
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
</style>