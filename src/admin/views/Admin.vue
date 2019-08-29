<template>
  <div id="admin">
    <app-header-component />
    <app-menu-component />
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";
export default {
  name: "Admin",
  components: { AppMenuComponent, AppHeaderComponent }
};
</script>

<style lang="sass" scoped></style>
