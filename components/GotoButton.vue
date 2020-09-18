<template>
  <div class="DataSection" :class="[{ 'is-active': order === 0}, { 'middle-section': order === 0}, { 'middle-section': order === 1}, { 'right-section': order === 2 }]">
    <nuxt-link :to="'/'+route">
      <h3 class="DataSection__sectionTitle">
        {{ route }}
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
  width: 1rem;
  border: none;

  & * {
    transition: ease 300ms all;
  }

  &.is-active {
    left: 0;
    height: 100%;
    z-index: 0;
    width: calc(100vw - 3rem);
  }

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

    &:hover{
      background-color: transparent;
      color: black;
      border: 1px solid black;
    }
  }

  &__sectionContainer {
    width: 100%;
    height: 100%;
    display: flex;
  }

  &__col {
    position: relative;
  }

  &__leftCol {
    width: 30%;
    height: 100%;
  }

  &__midCol {
    height: 100%;
    width: 40%;
    border-left: black solid 3px;
    &.is-active{
      height: 100%;
      width: calc(70% - 2rem);
    }
  }

  &__dataVizCol {
    border-left: none;
  }

  &__rightCol {
    min-width: 2rem;
    height: 100%;
    width: 30%;
    border-left: black solid 3px;

    &.is-blur{
      border-left: none;
      width: 2rem;

      h4 {
        top: 18.4rem;
      }

      .DataSection__textContainer {
        display: none;
        opacity: 0;
      }
    }

    p {
      font-size: 2rem;
    }
  }

  &__richtextContainer {
    overflow: auto;
    height: 100%;
  }

  &__textContainer {
    padding-left: 2rem;
    padding-right: 4rem;
    overflow: auto;
    height: 100%;
  }
}
</style>