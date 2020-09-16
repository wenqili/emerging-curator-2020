<template>
  <div class="menu">
    <div class="menu-containert">
      <form>
        <input type="text">
        <button>
          <font-awesome-icon icon="search" />
        </button>
      </form>

      <nuxt-link to="/about">
        Exhibition
      </nuxt-link> 
      <nuxt-link to="/about">
        Online residency
      </nuxt-link> 
      <nuxt-link to="/about">
        Participator
      </nuxt-link> 
      <nuxt-link to="/about">
        Contact
      </nuxt-link>     
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuSection',
}
</script>

<style lang="scss" scoped>

.menu-containert {
  position: absolute;
  top: 3rem;
  bottom: 0;
  width: 100%;
  padding: 3rem;
  // background-color: #1b191f;
  // color: #fffff9;
  > * {
    display: block;
  }
}


</style>