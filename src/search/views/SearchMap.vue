<template>
  <div id="search-map">
    <router-link
      :to="{ name: 'searchResults' }"
      tag="span"
      class="superscription"
    >
      Show results
    </router-link>
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="margin: 17px 41px; flex: 1 1 auto"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
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
