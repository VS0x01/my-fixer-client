<template>
  <div id="search-results">
    <router-link :to="{ name: 'searchMap' }" tag="span" class="superscription">
      Show map
    </router-link>
    <!-- <section class=""></section> +scrollbar(#E0E6F0, ##F5F7FA, 8px) -->
  </div>
</template>

<script>
export default {
  name: "SearchResults"
};
</script>

<style lang="sass" scoped>
.superscription
  display: inline-block
  margin: 43px auto 17px 41px
  font-weight: 600
</style>
