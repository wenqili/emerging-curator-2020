<template>
  <div class="rotating" :class="{ 'onMenu': onMenu }">
    <div class="catalog-grid" :class="{ 'onMenu': onMenu }">
      <div class="first-row-container">
        <div class="left-section">
          <figure>
            <div :style="'backgroundImage: url(/artists/'+currentArtistId[0]+'/static1.jpg)'" />
          </figure>
        </div>

        <div class="middle-section">
          <figure>
            <div :style="'backgroundImage: url(/institution/'+currentInstitutionId[0]+'/1.jpg)'" />
          </figure>
        </div>

        <div class="right-section">
          <figure>
            <div :style="'backgroundImage: url(/company/'+currentCompanyId[0]+'/1.png)'" class="contain" />
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
                  <li
                    v-for="artist in artists"
                    :key="artist.id"
                    :class="{ 'is-activeHover': currentArtistId.includes(`${artist.id}`) }"
                    @mouseover="handleHover({ artist: artist, type: 'artist' })"
                  >
                    <p>{{ artist.name }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End of sectionContainer -->
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
                <li
                  v-for="institution in institutions"
                  :key="institution.id"
                  :class="{ 'is-activeHover': currentInstitutionId.includes(`${institution.id}`) }"
                  @mouseover="handleHover({ institution: institution, type: 'institution' })"
                >
                  <p>{{ institution.name }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end of Institution -->

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
                <li
                  v-for="company in companies"
                  :key="company.companyid"
                  :class="{ 'is-activeHover': currentCompanyId.includes(`${company.companyid}`) }"
                  @mouseover="handleHover({ company: company, type: 'company' })"
                >
                  <p>{{ company.company }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NaviBar 
      @toggle-menu="onMenu = !onMenu" 
      @toggle-off-menu="onMenu = false"
    />
  </div>
</template>

<script>
import artists from "../assets/artists.json"
import institutions from "../assets/institution.json"
import companies from "../assets/companies.json"

export default {
  layout: "catalog",
  components: {},
  data: function () {
    return {
      onMenu: false,
      artists,
      institutions,
      companies,
      currentArtists: [],
      currentArtistId: [],
      currentInstitutionId: [],
      currentInstitutions: [],
      currentCompanyId: [],
      currentCompanies: [],
      currentFocus: "artist",
      currentArtist: {},
    }
  },
  created() {
    this.name = this.$route.params.artist
  },
  methods: {
    toggleArtwork: function () {
      document.getElementById("artwork").classList.toggle("is-active")
      document.getElementById("artinfo").classList.toggle("is-blur")
    },
    handleHover: function (item) {
      switch (item.type) {
        case "artist":
          this.currentArtistId = [`${item.artist.id}`]
          this.currentInstitutionId = item.artist.institutionid ? item.artist.institutionid.split(",") : []
          this.currentInstitutions = this.currentInstitutionId.map(index => institutions[index])
          this.currentCompanies = companies.filter((company) => this.currentInstitutionId.includes(`${company.institutionid}`))
          this.currentCompanyId = this.currentCompanies.map(company => `${company.companyid}`)
          break
        case "institution":
          this.currentInstitutionId = [`${item.institution.id}`]
          this.currentArtists = artists.filter(artist => artist.institutionid !== null && artist.institutionid.split(',').includes(`${item.institution.id}`))
          this.currentArtistId = this.currentArtists.map(artist => `${artist.id}`)
          this.currentCompanies = companies.filter((company) => this.currentInstitutionId.includes(`${company.institutionid}`))
          this.currentCompanyId = this.currentCompanies.map(company => `${company.companyid}`)
          break
        case "company":
          this.currentCompanyId = [`${item.company.companyid}`]
          this.currentInstitutionId = [`${item.company.institutionid}`]
          this.currentArtists = artists.filter(artist => artist.institutionid !== null && artist.institutionid.split(',').includes(`${this.currentInstitutionId}`))
          this.currentArtistId = this.currentArtists.map(artist => `${artist.id}`)
          break
        default:
          break
      }
    },
  },
  head() {
    return {
      title: "Emerging Curators 2020",
      meta: [
        {
          hid: "descriptions",
          name: "descriptions",
          content: "descriptions",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// First row
.first-row-container {
  display: flex;
  width: calc(100vw - var(--reserve-width) - var(--menu-full-width));
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
  width: calc(100vw - var(--reserve-width) - var(--menu-full-width));
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


.is-activeHover {
  background: #cecece;
  /* color: white; */
}

a.nuxt-link-active {
  background-color: black;
  color: white;
}

// New CSS style
.IndexSection {
  position: relative;
  top: 0;
  right: 0;
  padding-top: 1.2rem;
  height: 10.4rem;
  z-index: 1;
  height: 100%;
  border-top: 3px solid black;

  &.is-active {
    left: 0;
    z-index: 0;
  }

  h3 {
    top: 1.2rem;
    z-index: 1;
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
    padding-top: 0.1rem;
    &:hover {
      background-color: white;
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
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 200ms ease-in-out;
  }

  .contain{
    background-size: contain;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>