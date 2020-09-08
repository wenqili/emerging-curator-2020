<template>
  <div class="menu-grid">
    <aside>
      <div>
        Emerging Curator
      </div>
    </aside>
    <div class="artist-section content mb-0">
      <h3>1Artist</h3>
      <span v-for="archive in archives.archives" :key="archive.id">
        <span>[</span>
        <nuxt-link :to="{ name: 'artists-artist', params: { artist: archive.id }}">{{ archive.name }}</nuxt-link>
        <span>]</span>
      </span>
    </div>
    <div class="institution-section content mb-0">
      <h3>2institution</h3>
    </div>
    <div class="company-section content mb-0">
      <h3>3Company</h3>
    </div>
  </div>
</template>

<script>
import archives from "../assets/projects.json"

export default {
  name: 'Menu',
  data: function() {
    return {
      archives,
    }
  }
}
</script>

<style scoped>
.menu-grid {
  display: grid;
  grid-template-columns: 4rem repeat(5, 1fr) 1rem;
  grid-template-rows: 0.5rem 3.5rem repeat(4, 1fr) 2rem;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
}

aside {
  grid-area: 1 / 1 / 8 / 2;
  text-align: center;
  border-right: 5px solid yellow;
  position: relative;
  display: block;
  padding: 4rem 0;
}

aside div {
  font-size: 2.5rem;
  transform: rotate(90deg);
  white-space: nowrap;
  color: var(--primary-grey);
}

.artist-section {
  text-align: left;
  grid-area: 3 / 2 / 7 / 4;
  border-top: 5px solid yellow;
  border-bottom: 5px solid yellow;
  background-color: var(--primary-grey);
  padding: 1rem;
}

.institution-section {
  grid-area: 3 / 4 / 6 / 7;
  border: 5px solid yellow;
  border-bottom: none;
  background-color: var(--primary-blue);
  padding: 1rem;
}

.company-section {
  grid-area: 6 / 4 / 7 / 7;
  border: 5px solid yellow;
  padding: 1rem;
}

h3 {
  text-transform: uppercase;
  text-align: left;
  font-size: 6rem;
  color: black;
  margin-bottom: 0;
}

span {
  font-size: 1.5rem;
  white-space: nowrap;
}

a:hover {
  font-style: italic;
  font-weight: 900;
  font-size: 1.45rem;
  color: black;
}
</style>