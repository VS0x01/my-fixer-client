<template>
  <div id="messenger">
    <AppHeaderComponent />
    <AppMenuComponent />
    <main class="content"></main>
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";

export default {
  name: "Messenger",
  components: { AppHeaderComponent, AppMenuComponent }
};
</script>

<style scoped>

</style>
