<template>
  <ul class="breadcrumbs">
    <li>Home</li>
    <li>Network</li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumbs"
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
