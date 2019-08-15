<template>
  <div id="search">
    <AppHeaderComponent />
    <AppMenuComponent />
    <main class="content"></main>
  </div>
</template>

<script>
  import AppHeaderComponent from "@/components/AppHeader";
  import AppMenuComponent from "@/components/AppMenu";

  export default {
    name: "Search",
    components: { AppHeaderComponent, AppMenuComponent }
  };
</script>

<style scoped>

</style>