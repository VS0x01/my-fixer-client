<template>
  <div id="search-map">
    <router-link
      :to="{ name: 'searchResults' }"
      tag="span"
      class="superscription"
    >
      Show results
    </router-link>
    <img src="@/assets/map.png" alt="map" style="margin: 17px 41px;flex: 1 1 auto;" />
  </div>
</template>

<script>
export default {
  name: "SearchMap"
};
</script>

<style lang="sass" scoped>
.superscription
  display: inline-block
  margin: 43px auto 0 41px
  font-weight: 600
</style>
