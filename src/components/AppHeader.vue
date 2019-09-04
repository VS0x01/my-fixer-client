<template>
  <header class="header">
    <BreadcrumbsComponent />
    <img class="header__person-photo" src="@/assets/sarah_freeman.png" alt="" />
    <span class="header__person-name">Sarah Freeman</span>
  </header>
</template>

<script>
import BreadcrumbsComponent from "@/components/Breadcrumbs";

export default {
  name: "AppHeader",
  components: { BreadcrumbsComponent }
};
</script>

<style lang="sass" scoped>
@import "../shared/sass/mixins"

.header
  display: flex
  align-items: center
  position: relative
  margin-left: 80px
  height: 60px
  background: #FFF
  border-bottom: 1px solid #DAE4F2

  .header__person-photo
    margin: 0 9px 0 auto
    width: 22px
    height: 23px
    border-radius: 50%
    object-fit: cover

  .header__person-name
    +superscription(Roboto, normal, 14px, 16px, 0.28px, #252F48)

    &::after
      content: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.39626 5.15214L0.683169 1.38059C0.44685 1.14068 0.44685 0.751695 0.683169 0.511895C0.919278 0.272077 1.30222 0.272077 1.53831 0.511895L4.82383 3.84913L8.10923 0.511992C8.34543 0.272174 8.72834 0.272174 8.96445 0.511992C9.20065 0.751811 9.20065 1.14077 8.96445 1.38069L5.2513 5.15224C5.13319 5.27214 4.97856 5.33203 4.82385 5.33203C4.66906 5.33203 4.51431 5.27203 4.39626 5.15214Z' fill='%2301134E'/%3E%3C/svg%3E%0A")
      padding: 0 123px 0 8px
</style>
