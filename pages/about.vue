<template>
  <main>
    <div v-for="archive in archives.archives" :key="archive.id">
      <p>{{ archive.name }}</p>
      <p>{{ archive.title }}</p>
      <p>{{ archive.intro }}</p>
      <nuxt-link :to="{ name: 'artist', params: { artist: archive.name, data: archive }}">
        {{ archive.name }}
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import archives from "../assets/projects.json"

export default {
  data() {
    return {
      archives,
    }
  },
}
</script>

<style scoped>
/* ---- input ---- */
input[type="text"] {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 500;
  font-size: 20px;
  width: 600px;
}
</style>