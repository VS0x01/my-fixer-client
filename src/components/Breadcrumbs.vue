<template>
  <ul class="breadcrumbs">
    <li v-for="(breadcrumb, i) in breadcrumbs" :key="i">
      <router-link :to="{ name: breadcrumb }">
        {{ breadcrumb | clear | capitalize }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumbs",
  filters: {
    clear: function(value) {
      return value
        .split(/([^A-Z])/i)
        .filter(e => e.match(/([A-Z])/i))
        .join(" ");
    }
  },

  data() {
    return {};
  },

  computed: {
    breadcrumbs() {
      return ["home"].concat(
        this.$route.path.split("/").filter(breadcrumb => !!breadcrumb)
      );
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../shared/sass/mixins"

.breadcrumbs
  list-style: none
  font-size: 0

  li
    display: inline
    +superscription(Roboto, normal, 13px, 15px, 0.685714px, #252F48)

    a
      text-decoration: none
      color: inherit

    + li::before
      content: ">"
      margin: 0 12px 0 12px
      color: #0AD69C
</style>
