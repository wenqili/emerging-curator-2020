<template>
  <div class="rotating" :class="{ 'onMenu': onMenu }">
    <div class="catalog-grid" :class="{ 'onMenu': onMenu }">
      <div class="second-row-container">
        <div class="DataSection is-active">
          <h3 class="DataSection__sectionTitle">
            Company
          </h3>

          <div class="DataSection__sectionContainer">
            <div class="DataSection__col DataSection__leftCol">
              <div>
                <ul>
                  <li v-for="company in companies" 
                      :key="company.companyid"
                      :class="{ 'is-active': `${company.companyid}` === current}"
                      @mouseover="current = `${company.companyid}`"
                  >
                    <p>{{ company.company }}</p>
                  </li>
                </ul>
              </div>
            </div>
          
            <div class="DataSection__col DataSection__midCol DataSection__dataVizCol  is-active">
              <div class="DataSection__richtextContainer">
                <CompanyDataViz :current="current" />
              </div>
            </div>
          </div> 
        </div>

        <GotoButton route="artists" :order="1" />
        <GotoButton route="institutions" :order="2" />
      </div>
    </div>
    <NaviBar 
      @toggle-menu="onMenu = !onMenu" 
      @toggle-off-menu="onMenu = false"
    />
  </div>
</template>

<script>
import companies from "../../assets/companies.json"

export default {
  layout: 'catalog',
  components: {
    
  },
  data: function() {
    return {
      current: '',
      companies,
      onMenu: false,
      currentFocus: 'companies',
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
    /* transition: all 300ms ease; */
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

  &.artist {
    top: 9.2rem;
  }

  &.insititution {
    top: 9.2rem;
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
  height: 10.4rem;
  z-index: 1;
  width: 1rem;
  border: none;

  & * {
    transition: ease 300ms background-color;
  }

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