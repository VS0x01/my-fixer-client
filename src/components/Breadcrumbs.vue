<template>
  <ul class="breadcrumbs">
    <li v-for="(breadcrumb, i) in breadcrumbs" :key="i">{{ breadcrumb | capitalize }}</li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data() {
    return {
    };
  },
  computed: {
    breadcrumbs() {
      return ['Home'].concat(this.$route.path.split('/').filter((breadcrumb) => !!breadcrumb));
    }
  }
};
</script>

<style lang="sass" scoped>
.breadcrumbs
  list-style: none
  font-size: 0

  li
    display: inline
    font-family: Roboto, sans-serif
    font-style: normal
    font-weight: normal
    font-size: 13px
    line-height: 15px
    letter-spacing: 0.685714px
    color: #252F48

    &::after
      content: ">"
      margin: 0 12px 0 12px
      color: #0AD69C

    &:last-of-type
      &::after
        display: none
</style>
