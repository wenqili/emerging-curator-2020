<template>
  <div class="rotating" :class="{ 'onMenu': onMenu }" @mousemove="onMouseMove($event)">
    <div class="catalog-grid" :class="{ 'onMenu': onMenu }">
      <div class="floater">
        <button>
          <nuxt-link to="/">
            <font-awesome-icon icon="times" />
          </nuxt-link>
        </button>

        <div id="floater-image" :class="{ 'onCursorOn': onCursorOn }" />
      </div>
      <div class="about-container">
        <div class="left">
          <h1>
            <span>
              {{ $t('about.title') }}
            </span>
          </h1>
          <h3> {{ $t('about.curator') }}</h3>
          <p> {{ $t('about.curatorContent') }}</p>

          <h3>{{ $t('about.programmer') }}</h3>
          <p>{{ $t('about.programmerContent') }}</p>

          <h3>{{ $t('about.designer') }}</h3>
          <p>{{ $t('about.designerContent') }}</p>

          <h3>{{ $t('about.support') }}</h3>
          <p>{{ $t('about.supportContent') }}</p>

          <h3>{{ $t('about.residency') }}</h3>
          <p>
            {{ $t('about.residencyContent') }}
            <a href="http://trigggggggger.com" target="_blank">http://trigggggggger.com</a>
          </p>
        </div>
        <div class="right">
          <div class="column-container">
            <h3> {{ $t('about.subtitle') }}</h3>
            <p>{{ $t('about.p1') }}</p>
            <p>{{ $t('about.p2') }}</p>
            <p>{{ $t('about.p3') }}</p>
            <p>{{ $t('about.p4') }}</p>
            <p>{{ $t('about.p5') }}</p>
            <p>{{ $t('about.p6') }}</p>
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
      const floater = document.getElementById('floater-image')
      floater.style.top = e.clientY + 'px'
      floater.style.left = e.clientX + 'px'
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
  span {
    white-space: pre-line;
  }
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

a.nuxt-link-active {
  background-color: transparent;
  color:black;
}
</style>