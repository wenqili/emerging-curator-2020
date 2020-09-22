import artists from "../assets/artists.json"
import artistsCN from "../assets/cn/artists.json"
import institutions from "../assets/institution.json"
import institutionsCN from "../assets/cn/institution.json"
import companies from "../assets/companies.json"
import companiesCN from "../assets/cn/companies.json"
import projects from "../assets/project.json"
import projectsCN from "../assets/cn/project.json"
import artistsOverview from "~/assets/artists_overview.json"
import artistsOverviewCN from "~/assets/artists_overview_cn.json"
import institutionOverview from "~/assets/institution_overview.json"
import institutionOverviewCN from "~/assets/institution_overview_cn.json"

export const state = () => ({
  locales: ['en', 'cn'],
  locale: 'en',
  localeArtistData: artists,
  localeInstitutionData:institutions,
  localeCompanyData: companies,
  localeProjectData: projects,
  localeArtistsOverview: artistsOverview,
  localeInstitutionOverview: institutionOverview,
  localeArtistDiagram: 'artist-diagram.png',
  localeInstitutionDiagram: 'institution-diagram.png',
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      state.localeArtistData = locale === "cn" ?  artistsCN : artists
      state.localeInstitutionData = locale === "cn" ?  institutionsCN : institutions
      state.localeCompanyData = locale === "cn" ? companiesCN : companies
      state.localeProjectData = locale === "cn" ? projectsCN : projects
      state.localeArtistsOverview = locale === "cn" ? artistsOverviewCN : artistsOverview
      state.localeInstitutionOverview = locale === "cn" ? institutionOverviewCN : institutionOverview
      state.localeArtistDiagram = locale === "cn" ? '/artist-diagram-cn.png' : '/artist-diagram.png'
      state.localeInstitutionDiagram = locale === "cn" ? '/institution-diagram-cn.png' : '/institution-diagram.png'
    }
  }
}
