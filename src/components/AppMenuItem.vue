<template>
  <router-link
    :to="link"
    tag="div"
    class="menu__item"
    :class="{ 'menu__item_with-notification': notifications }"
    active-class="menu__item_enabled"
    :data-notifications-number="notifications"
  >
    <svg
      :width="width"
      :height="height"
      :viewBox="viewBox"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <slot />
    </svg>
  </router-link>
</template>

<script>
export default {
  name: "AppMenuItem",
  props: {
    link: {
      type: [Object, String]
    },
    notifications: {
      type: Number,
      default: 0
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    viewBox: {
      type: String,
      default: "0 0 18 18"
    }
  }
};
</script>

<style lang="sass" scoped>
.menu__item
  position: relative
  height: 48px
  padding: 12px 0 12px 0
  display: flex
  justify-content: center
  align-items: center
  width: inherit

  svg
    cursor: pointer

.menu__item_with-notification
  &::after
    content: attr(data-notifications-number)
    position: absolute
    z-index: 1
    width: 19px
    height: 19px
    top: 19px
    right: 20px
    background-color: #2A74DB
    border-radius: 50%
    text-align: center
    font-family: Roboto, sans-serif
    font-style: normal
    font-weight: bold
    font-size: 12px
    line-height: 20px
    letter-spacing: 0.28px
    color: #FFFFFF

.menu__item_enabled
  &::before
    content: url("data:image/svg+xml,%3Csvg width='4' height='48' viewBox='0 0 4 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='48' fill='%230AD69C'/%3E%3C/svg%3E%0A")
    position: absolute
    top: 14px
    left: 0
</style>
