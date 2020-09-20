<template>
  <div class="navi-bar">
    <nav>
      <nuxt-link
        class="siteTitle"
        to="/"
      >
        Blue Cables in Venetan Watercourse
      </nuxt-link>
      <button v-if="!showMenuList" class="clear" :class="{ 'is-focused': showMenuList }" @click="toggleMenuList">
        <font-awesome-icon v-if="!showMenuList" icon="grip-lines" />

        <span>Menu</span>
      </button>
      <div v-else @click="toggleMenuList">
        <div class="about">
          <button class="clear" @click="toggleMenu">
            {{ isMenu ? 'Home' : 'Online Residency' }}
          </button>
          <nuxt-link to="/about">
            Contact
          </nuxt-link>
          <nuxt-link to="/about">
            About
          </nuxt-link>
          <font-awesome-icon icon="slash" />
          <button class="clear">
            Menu
          </button>
        </div>
      </div>
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
      showMenuList: false,
    }
  },
  methods: {
    toggleMenu: function() {
      this.isMenu = !this.isMenu
      this.$emit('toggle-menu')
    },
    toggleOffMenu: function() {
      this.isMenu = false
      this.$emit('toggle-off-menu')
    },
    toggleMenuList: function() {
      this.showMenuList = !this.showMenuList
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
  font-size:0.8rem;
  color: black;
  font-weight: bold;
  line-height: 1.2;
  background-color: transparent;
  padding:0.5rem;
}

.clear{
  background-color: transparent;
  border: none;
  font-weight: 900;
  padding:0.5rem;
  cursor: pointer;
}

.about{
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 300ms ease;

  a {
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1;
    font-family: var(--secondary-font);
  }
}

</style>