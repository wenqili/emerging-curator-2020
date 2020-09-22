<template>
  <div class="DataSection" :class="[{ 'is-active': order === 0}, { 'middle-section': order === 0}, { 'middle-section': order === 1}, { 'right-section': order === 2 }]">
    <nuxt-link :to="$i18n.path(route)">
      <h3 class="DataSection__sectionTitle">
        {{ $t('links')[route] }}
      </h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name: "GoToButton",

    props: {
    'order': {
      type: Number, 
      default: 0,
    }, 
    'route': {
      type: String, 
      default: 'artists', 
    },
  },
}
</script>

<style lang="scss" scoped>

.right-section {
  top: 9.2rem !important;
}

.DataSection {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 1.2rem;
  padding-left: 2rem;
  // padding-bottom: 1.2rem;
  height: 10.4rem;
  z-index: 1;
  width: 2.2rem;
  border: none;

  & * {
    transition: ease 300ms all;
  }
/* 
  &.is-active {
    left: 0;
    height: 100%;
    z-index: 0;
    width: calc(100vw - 3rem);
  } */

  h3 {
    top: 1.2rem;
  }

  &__sectionTitle {
    top: 0;
    left: 1.2rem;
    position: absolute;
    transform-origin: top left;
    transform: rotate(90deg);
    background-color: black;
    color: white;
    width: 8rem;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.3rem;
    cursor: pointer;
    user-select: none;
    text-transform:capitalize;
    padding-top: 0.1rem;

    &:hover{
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
}
</style>