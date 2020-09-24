<template>
  <div class="rotating" :class="{ 'onMenu': onMenu }">
    <div class="catalog-grid" :class="{ 'onMenu': onMenu }">
      <div class="first-row-container">
        <div class="left-section">
          <figure v-for="(artist, index) in artists" :key="index" :class="{'is-feature': currentArtistId[0] === artist.id}">
            <div :style="'backgroundImage: url(./artists/'+artist.id+'-baked.png)'" />
          </figure>
        </div>

        <div class="middle-section">
          <figure v-for="(institution, index) in institutions" :key="index" :class="{'is-feature': currentInstitutionId[0] === institution.id}">
            <div :style="'backgroundImage: url(./institution/'+institution.id+'/1.png)'" />
          </figure>
        </div>

        <div class="right-section">
          <figure v-for="(company, index) in companies" :key="index" :class="{'is-feature': currentCompanyId[0] === company.companyid}">
            <div
              :style="'backgroundImage: url(./company/'+company.companyid+'/1.png)'"
              class="contain"
            />
          </figure>
        </div>
      </div>

      <!-- Second -->
      <div class="second-row-container">
        <!-- Artists -->

        <div class="IndexSection left-section">
          <nuxt-link :to="$i18n.path('artists')">
            <h3 class="IndexSection__sectionTitle">
              {{ $t('links.artists') }}
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
                    :class="{ 'is-activeHover': currentArtistId.includes(artist.id), 'onHover': 'a'+artist.id === onHoverId }"
                    @mouseover="debounce(() => handleHover({ artist: artist, type: 'artist' }))"
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
            <nuxt-link :to="$i18n.path('institutions')">
              {{ $t('links.institutions') }}
            </nuxt-link>
          </h3>

          <!-- Institution list -->
          <div class="IndexSection__col IndexSection__leftCol">
            <div class="IndexSection__richtextContainer">
              <ul>
                <li
                  v-for="institution in institutions"
                  :key="institution.id"
                  :class="{ 'is-activeHover': currentInstitutionId.includes(institution.id), 'onHover': 'i'+ institution.id === onHoverId }"
                  @mouseover="debounce(() => handleHover({ institution: institution, type: 'institution' }))"
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
            <nuxt-link :to="$i18n.path('companies')">
              {{ $t('links.companies') }}
            </nuxt-link>
          </h3>

          <!-- Company list -->
          <div class="IndexSection__col IndexSection__leftCol">
            <div class="IndexSection__richtextContainer">
              <ul>
                <li
                  v-for="company in companies"
                  :key="company.companyid"
                  :class="{ 'is-activeHover': currentCompanyId.includes(`${company.companyid}`), 'onHover': 'c'+ company.id === onHoverId }"
                  @mouseover="debounce(() => handleHover({ company: company, type: 'company' }))"
                >
                  <p>{{ company.company }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NaviBar @toggle-menu="onMenu = !onMenu" @toggle-off-menu="onMenu = false" />
  </div>
</template>

<script>
// import artists from "../assets/artists.json"
// import institutions from "../assets/institution.json"
// import companies from "../assets/companies.json"
let timer
let ticking = false
export default {
  layout: "catalog",
  components: {},
  data: function () {
    return {
      ticking,
      timer,
      onMenu: false,
      onHoverId: '',
      artists: this.$store.state.localeArtistData,
      institutions: this.$store.state.localeInstitutionData,
      companies: this.$store.state.localeCompanyData,
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
  mounted(){

  },
  methods: {
    toggleArtwork: function () {
      document.getElementById("artwork").classList.toggle("is-active")
      document.getElementById("artinfo").classList.toggle("is-blur")
    },
    handleHover: function (item) {
      switch (item.type) {
        case "artist":
          this.onHoverId = 'a' + item.artist.id
          this.currentArtistId = [item.artist.id]
          this.currentInstitutionId = item.artist.institutionid
            ? item.artist.institutionid.split(",")
            : []
          this.currentInstitutions = this.currentInstitutionId.map(
            (index) => this.institutions[index]
          )

          this.currentCompanies = this.companies.filter((company) => {
            const companySponsedIns = company.institutionid.split(",")
            const overlapped = this.currentInstitutionId.filter((ins) =>
              companySponsedIns.includes(ins)
            )
            return overlapped.length > 0
          })
          this.currentCompanyId = this.currentCompanies.map(
            (company) => `${company.companyid}`
          )
          break
        case "institution":
          this.onHoverId = 'i' + item.institution.id
          this.currentInstitutionId = [item.institution.id]
          this.currentArtists = this.artists.filter(
            (artist) =>
              artist.institutionid !== null &&
              artist.institutionid.split(",").includes(item.institution.id)
          )
          this.currentArtistId = this.currentArtists.map((artist) => artist.id)
          this.currentCompanies = this.companies.filter((company) => {
            const companySponsedIns = company.institutionid.split(",")
            const overlapped = this.currentInstitutionId.filter((ins) =>
              companySponsedIns.includes(ins)
            )
            return overlapped.length > 0
          })
          this.currentCompanyId = this.currentCompanies.map(
            (company) => company.companyid
          )
          break
        case "company":
          this.onHoverId = 'c' + item.company.id
          this.currentCompanyId = [item.company.companyid]
          this.currentInstitutionId = item.company.institutionid.split(",")

          this.currentArtists = this.artists.filter((artist) => {
            const artistSponsors = artist.institutionid.split(",")
            const overlapped = this.currentInstitutionId.filter((ins) =>
              artistSponsors.includes(ins)
            )
            return overlapped.length > 0
          })
          this.currentArtistId = this.currentArtists.map((artist) => artist.id)
          break
        default:
          break
      }
      setTimeout(() => {
        if(document.getElementsByClassName('onMenu').length <= 1) {
          var elementList = document.getElementsByClassName("is-activeHover")
          elementList.length > 0 && this.scrollView(elementList)
        }
      }, 20)
    },
    scrollView: function (elementList) {
      for (let item of elementList) {
        console.log()
        if(!item.classList.contains('onHover')){
          item.scrollIntoView()
        }
      }
    },
    debounce: function (fn) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply()
      }, 20)
    },
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
    position: relative;

}

.middle-section {
  width: 44%;
  border-left: 3px black solid;
  position: relative;
}

.right-section {
  width: 28%;
  border-left: 3px black solid;
    position: relative;

}

.is-activeHover {
  background: #cecece;
  /* color: white; */
  /* margin-bottom: 1.5rem; */
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  width: 0;
  overflow: hidden;
  position: absolute;
  /* filter: blur(15px); */
  /* opacity: 1; */
  /* transition: height 1s, opacity 0.3s linear; */
  /* animation: fadeOut 1s; */

  &.is-feature {
    width: 100%;
    height: 100%;
    /* display: block; */
    opacity: 1;
    filter: none;
    animation: fadeIn 3s ;
  }

  div {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .contain {
    background-size: contain;
    background-color: white;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
@keyframes fadeIn {
  /* You could think of as "step 1" */
  0% {
    opacity: 0;
  }
  /* You could think of as "step 2" */
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  /* You could think of as "step 1" */
  0% {
    opacity: 1;
  }
  /* You could think of as "step 2" */
  100% {
    opacity: 0;
    height: 0;
    width: 0;
  }
}
</style>