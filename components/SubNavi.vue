<template>
  <div class="subnavi">
    <ul>
      <li class="title is-4 mb-0">
        <NuxtLink to="/artists">
          <span>1</span>Artist
        </NuxtLink>
      </li>
      <li class="title is-4 mb-0">
        <NuxtLink to="/institution">
          <span>2</span>Institution
        </NuxtLink>
      </li>
      <li class="title is-4 mb-0">
        <NuxtLink to="/company">
          <span>3</span>Company
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'SubNavi'
}
</script>
<style scoped>
.subnavi {
  position: fixed;
  left: 5rem;
  bottom: 3rem;
}

ul{
  list-style-type: none;
  padding:0;
}

li{
  text-align: left;
  text-transform: uppercase;
  font-family: 'Oriya MN';
  font-weight: bold;
  line-height: 1;
}

span {
  background-color: yellow;
}

</style>