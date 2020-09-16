<template>
  <main>    
    <AppHeader />
    <NaviBar />
    <SubNavi />
    <div class="landing-text">
      <p>
        Discover graduate work by artists from around the world. Engage with a programme of events, explore collections by guest curators, and immerse yourself in the thinking of the world’s most talented emerging artists and designers.
      </p>
    </div>
    <Canvas />
  </main>
</template>

<script>
import AppHeader from '../components/AppHeader'
import NaviBar from '../components/NaviBar'
import SubNavi from '../components/SubNavi'
import Canvas from '../components/Canvas'
export default {
  components: {
    AppHeader,
    NaviBar,
    SubNavi,
    Canvas,
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

<style scoped>
.landing-text {
  grid-area: 3 / 5 / 3 / 7;
  margin: 1.2rem 1rem;
  justify-content: flex-end;
  display: flex;
}

.landing-text p {
  max-width: 20rem;
}


</style>

