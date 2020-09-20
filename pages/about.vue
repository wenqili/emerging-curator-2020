<template>
  <div class="rotating" :class="{ 'onMenu': onMenu }" @mousemove="onMouseMove($event)">
    <div class="catalog-grid" :class="{ 'onMenu': onMenu }">
      <div class="floater">
        <button @click="onCursorOn = !onCursorOn">
          <font-awesome-icon v-if="onCursorOn" icon="times" />
          <font-awesome-icon v-else icon="circle" />
        </button>
        <div id="floater-image" :class="{ 'onCursorOn': onCursorOn }" />
      </div>
      <div class="about-container">
        <div class="left">
          <h1>
            New Agencies & their
            <br>Cheese factories
          </h1>
          <h3>Curator</h3>
          <p>Xinyang Cai / Iris Long</p>

          <h3>Programer</h3>
          <p>Wenqi Li / Zui Chen</p>

          <h3>Designer</h3>
          <p>Sixin Chen</p>

          <h3>Data and Research Support</h3>
          <p>Yue Ren</p>

          <h3>Online Residency Support</h3>
          <p>
            Trigger:
            <a href="http://trigggggggger.com" target="_blank">http://trigggggggger.com</a>
          </p>
        </div>
        <div class="right">
          <div class="column-container">
            <h3>Curatorial Statement</h3>
            <p>The discussion of interdisciplinary, or more specifically, “art, science and technology”, has been on the hype for a while. However, the condition, context and mechanism within which these artworks emerge, are rarely thoroughly investigated in China.</p>
            <p>This curatorial project’s key concern is around an emerging, yet ambiguous tendency of “how art flows interdisciplinarily”. Nowadays, along with the identity and position shift of art sponsors amongst matrices of social activities and capitals, the content and form of art is iterating rapidly, leading to a transformative stage of the organisational relationship and new social impacts of art production. Art born in the age of the internet, advanced technologies and globalised capitals, are endowed with interdisciplinary potentials and lean more towards mixed media, on/offline presentations. This kind of art thus becomes ideal testbeds or promotional tools for emerging technologies and concepts. Meanwhile, practitioners from the art field are also eager to acquire tech-support, conceptual inspirations and marketing potentials from the “external world”. In recent years, we've observed entertainment companies, internet and tech firms, as well as science research institutions launching and sponsoring interdisciplinary programs, whereas art institutions and artists also are active in identifying potential tech and financial needs for specific projects.</p>
            <p>To name it straightforwardly, the “interdisciplinary production resources”, ranging from advanced technologies to diverse capitals, are often circulated, distributed and realised via the medium roles played by interdisciplinary institutions or programs. The history of tech firms sponsoring art can be traced back to Bell Labs and Xerox PARC, in an early newsletter of the E.A.T, Billy Klüver and Robert Rauschenberg cleared stated that “...E.A.T. is founded on the strong belief that an industrially sponsored, effective working relationship between artists and engineers will lead to new possibilities which will benefit society as a whole.” (E.A.T. News, vol.1, no.2, June 1, 1967, p l.). The historical samples relied a lot on the human (initialiser) factor, whilst nowadays the flow of interdisciplinary production resources takes a richer look: non-individual initialisers, clear commercial purposes (some capitals are even sourced from promotional or marketing budgets from sponsoring companies), relatively standardized program mechanisms, multi-threaded workflow, and distribution patterns not limited within the world of art. In Serpentines xxxx,</p>
            <p>This curatorial research project anticipates to pierce through the clouds of ambiguity and suspicion surrounding the hype-word “interdisciplinary”, and investigate the construction, flows, features and dilemmas of the “interdisciplinary production resources” mentioned above. American medical science and tech companies have been providing “preferencial funds” to the academic field in exchange for long-term lobbying cost. Echoing this pattern, would tech companies’ support for contemporary art be beneficial to them in acquiring long-term voice in the field of art (as cultural and discourse capital), public attention, and an avant-garde or self-critical corporation image? How would an art institution mediate swiftly among artists and companies, to allow more subtle, flexible and critical intervention?</p>
            <p>The project will embark on artworks produced within contexts of residency, commission, open-call and commercial collaborations between artists and tech-companies/science research institutions, and conduct data-analysis, present archives and reports, to unfold hidden details and patterns of the production relationship. The project’s research subjects will expand from case study of artists, into multiple roles within the process (initialiser, sponsor, developer, scientist, communicator, etc), and encompass multi-layered production materials, ranging from communication files between artists and institutions, administrative documents, to sketches and diagrams. We hope to analyze how this transformation of production relationship would influence the trajectory of art, and provide speculative institutional models. The project also establishes a long-term online mechanism, a “ghost observer” who follows emerging practitioners in this field, and serves as an online archive, presentation platform, research resource and think tank.</p>
          </div>
        </div>
      </div>
    </div>
    <NaviBar @toggle-menu="onMenu = !onMenu" @toggle-off-menu="onMenu = false" />
  </div>
</template>

<script>
export default {
  layout: "catalog",
  data: function () {
    return {
      onMenu: false,
      onCursorOn: true,
    }
  },
  methods: {
    onMouseMove(e) {
      // console.log("page x: " + this.page.left)
      // this.page.left = e.pageX
      // this.page.top = e.pageY
      const floater = document.getElementById('floater-image')
      floater.style.top = e.clientY + 'px'
      floater.style.left = e.clientX + 'px'

      console.log(e)
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  position: fixed;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
}
#floater-image {
  position: absolute;
  background-image: url("~static/about.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: 50%;

  display: none;
  
  &.onCursorOn{
    display: block;
  }
}
.about-container {
  padding-left: 3rem;
  display: flex;
  height: 100vh;
}

.left {
  width: 40%;
  padding-top: 3rem;
  /* flex-grow: 1; */
}

h1 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 3rem;
  line-height: 1.1;
}

h3 {
  font-size: 1.1rem;
  margin-bottom: 0.1rem;
  line-height: 1.5;
}

p {
  margin-bottom: 2rem;
}

a {
  text-decoration: underline;
}

.right {
  padding: 3rem 0;
  width: 60%;
  overflow-y: scroll;
  height: 100%;
  padding-right: 3rem;
  p {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 3rem;
  }
}

.column-container {
  padding: 0 0.5rem;
  column-count: 2;
  column-gap: 40px;
}
</style>