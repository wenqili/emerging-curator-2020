<template>
  <div class="DataSection" :class="[{ 'is-active': currentFocus === category.left}, category.left, currentFocus]">
    <GotoButton :route="category.left" />
    <div v-if="currentFocus === category.left" class="DataSection__sectionContainer">
      <div class="DataSection__col DataSection__leftCol">
        <div>
          <ul v-if="category.left === 'companies'">
            <li v-for="company in companies"
                :key="company.companyid"
            >
              {{ company.company }}
            </li>
          </ul>
          <ul v-else>
            <li>
              {{ data.name }}
            </li>
          </ul>
        </div>
      </div>
          
      <div id="artwork" class="DataSection__col DataSection__midCol">
        <h4 class="DataSection__sectionTitle" @click="toggleArtwork">
          {{ category.middle }}
        </h4>
        <div class="DataSection__richtextContainer">
          <div v-if="assets.length === 0" style="text-align: center">
            Artist didn't submit images
          </div>
          <figure v-for="(asset,index) in assets" v-else-if="category.middle === 'artwork' && assets.length > 0" :key="index">
            <img :src="'/artists/'+data.id+'/'+asset">
          </figure>
        </div>
      </div>

      <div id="artinfo" class="DataSection__col DataSection__rightCol">
        <h4 class="DataSection__sectionTitle" @click="toggleArtwork">
          {{ category.right }}
        </h4>
        <div class="DataSection__textContainer">
          <TextBlock :content="data" :type="category.left" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artists from "../assets/artists.json"
import institutions from '../assets/institution.json'
import companies from '../assets/companies.json'

let cleanArtists = [...new Set(artists)]
let cleanInstitutions = [...new Set(institutions)]
export default {
  name: "Slide",
  layout: 'catalog',
  props: {
    'category': {
      type: Object, 
      default() {
        return {}
      },
    }, 
    'currentFocus': {
      type: String, 
      default: 'artist', 
    },
  },
  data: function() {
    return {
      companies,
      cleanArtists,
      cleanInstitutions,
      isMenu: false,
    }
  },
  created() {
    const routeName = this.$route.params.artist
    switch(this.category.left) {
      case 'artists':
        this.data = cleanArtists.find(artist => artist.url === routeName) || {}
      break
      case 'institutions':
        this.data = institutions[this.$route.params.institution] || {}
        break
      case 'companys':
        this.data = this.companies
        break
      default:
        this.data = {}
    }
    this.cleanInstitutions = cleanInstitutions
    this.assets = this.data.assets ? this.data.assets.split(",") : []
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

.is-menu {
  .second-row-container {
    height: calc(100vw - 6rem) !important;
  }
}

.Insititutions{

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

  &.Insititutions {
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

