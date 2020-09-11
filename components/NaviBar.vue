<template>
  <nav :style="cssProps" :class="{ 'is-active': isActive }">
    <div class="dropdown" :class="{ 'is-active': isActive }">
      <div class="dropdown-trigger">
        <button
          class="button is-medium m-1"
          :class="theme === 'dark' ? 'is-black':'is-white'"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          @click="isActive = !isActive"
        >
          <span class="icon is-medium">
            <font-awesome-icon v-if="isActive" icon="times" />
            <font-awesome-icon v-else icon="bars" />
          </span>
        </button>
      </div>
      <div id="dropdown-menu" class="dropdown-menu" role="menu">
        <Menu />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NaviBar",
  props: {
    theme: {
      type: String,
      default: "dark",
    },
  },
  data: function() {
    return {
      isActive: false,
    }
  },
  computed: {
    cssProps() {
      return {
        "--nav-bg-color": this.theme === "dark" ? "black" : "white",
      }
    },
  },
}
</script>

<style scoped>
nav {
  background-color: var(--nav-bg-color);
  grid-area: 1 / 1 / 8 / 2;
  text-align: center;
  border-right: 5px solid black;
}

nav.is-active {
  grid-area: 1 / 1 / 8 / 8;

}

button {
  z-index: 21;
  background-color: transparent !important;
  border: none;
}

.dropdown {
  width: 100%;
  height: 100%;
}
#dropdown-menu{
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-brown);
}

.is-active #dropdown-menu {
  opacity: 1 !important;
}
</style>