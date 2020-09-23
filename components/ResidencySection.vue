<template>
  <div class="menu">
    <div class="residency-containert">
      <div class="top-section">
        <h2>{{ $t('links.onlineResidency') }}</h2>
        <form>
          <input type="text" value="Search">
          <button>
            <font-awesome-icon icon="search" />
          </button>
        </form>
      </div>
      <div class="bottom-section">
        <iframe src="https://calendar.google.com/calendar/embed?src=en.china%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="100%" height="100%" frameborder="0" scrolling="no" />
      </div>
      <div id="langButton">
        <NuxtLink v-if="$i18n.locale === 'cn'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
          CN
          <br>EN
        </NuxtLink>
        <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
          CN
          <br>EN
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuSection',
}
</script>

<style lang="scss" scoped>

#langButton {
    border: none;
    margin-right: 0.5rem;
    background: transparent;
    font-size: 1.2rem;
    width: 4rem;
    height: 3rem;
    text-align: center;
    right: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    line-height: 1;
    align-items: center;
}
.residency-containert {
  position: absolute;
  left: calc(-100vw + var(--reserve-width) + var(--menu-full-width) - 3px);
  bottom: 0;
  width: calc(100vw - var(--reserve-width) - var(--menu-full-width));
  height: 100vh;
}

.top-section {
  height: 3rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  font-size: 1.5rem;
  padding-left: 1rem;
  width: 80%;
  height: 100%;
  border-right: 3px solid black;
  display: flex;
  align-items: center;
}

form {
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding:0.5rem 0;

  input {
    border: none;
    font-size: 1.5rem;
    margin-left: 0.5rem;
    background: transparent;
  }
  
  button {
    border: none;
    margin-right: 0.5rem;
    background: transparent;
    font-size: 1.2rem;
    width: 2rem;
  }
}

.bottom-section{
  height: calc(100% - 3rem - 4rem);
  border-bottom: 3px solid black;
  border-right: none;
  border-top: none;
}

iframe {
  border: 1px solid transparent;
}

</style>