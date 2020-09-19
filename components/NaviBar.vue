<template>
  <div class="navi-bar">
    <nav>
      <nuxt-link
        class="navi-item siteTitle"
        to="/"
      >
        New agencies and their cheese factories
      </nuxt-link>
      <button class="navi-item" :class="{ 'is-focused': isMenu }" @click="toggleMenu">
        <font-awesome-icon v-if="!isMenu" icon="grip-lines" />
        <div v-else class="about">
          <nuxt-link to="/about">
            About
          </nuxt-link>
          <font-awesome-icon icon="slash" />
        </div>
        <span>Menu</span>
      </button>
    </nav>
    <ResidencySection />
  </div>
</template>

<script>
export default {
  name: "NaviBar",
  props: {
  },
  data: function() {
    return {
      isMenu: false,
    }
  },
  methods: {
    toggleMenu: function(){
      this.isMenu = !this.isMenu
      this.$emit('toggle-menu')
    },
    toggleOffMenu: function(){
      this.isMenu = false
      this.$emit('toggle-off-menu')
    }
  }
}
</script>

<style lang='scss' scoped>
button {
  span {
    display: block;
  }
}
.navi-bar {
  position: relative;
  height: 100%;
  border-left: 3px solid black;
  border-right: 3px solid black;
  width: var(--menu-full-width);
  left: var(--reserve-width);
}

.navi-bar nav {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.navi-item {
  position: relative;
  z-index: 1;
  padding: 0.5rem;
  border: none;
  background: none;
  outline: transparent;
}

.navi-item.is-focused {
  font-weight: 900;
}

.siteTitle {
  /* transform-origin: 0 1; */
  /* transform: rotate(-90deg); */
  color: black;
  font-weight: bold;
  line-height: 1;
  
}

.about{
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

</style>