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
          <h3 v-else>
            {{ data.name }}
          </h3>
        </div>
      </div>
          
      <div id="artwork" class="DataSection__col DataSection__midCol">
        <h4 class="DataSection__sectionTitle" @click="toggleArtwork">
          {{ $t('links')[category.middle] }}
        </h4>
        <div class="DataSection__richtextContainer">
          <Artwork v-if="category.middle === 'artwork'" :artist-id="data.id" />
          <InstitutionWork v-else-if="category.middle === 'information'" :institution-id="data.id" />
        </div>
      </div>

      <div id="artinfo" class="DataSection__col DataSection__rightCol">
        <h4 class="DataSection__sectionTitle" @click="toggleArtwork">
          {{ $t('links')[category.right] }}
        </h4>
        <div class="DataSection__textContainer">
          <TextBlock :content="data" :type="category.left" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      companies: this.$store.state.localeCompanyData,
      artists: this.$store.state.localeArtistData,
      institutions: this.$store.state.localeInstitutionData,
    }
  },
  created() {
    const routeName = this.$route.params.artist
    switch(this.category.left) {
      case 'artists':
        this.data = this.artists.find(artist => artist.url === routeName) || {}
      break
      case 'institutions':
        this.data = this.institutions[this.$route.params.institution] || {}
        break
      case 'companys':
        this.data = this.companies
        break
      default:
        this.data = {}
    }
    // this.cleanInstitutions = cleanInstitutions
    this.assets = this.data.assets ? this.data.assets.split(",") : []
  },
  methods: {
    toggleArtwork: function() {
      document.getElementById('artwork').classList.toggle('is-active')
      document.getElementById('artinfo').classList.toggle('is-blur')
    },
  }
}
</script>


<style lang="scss" scoped>

h3 {
  font-size: 2rem;
}
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

