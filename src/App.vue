<template>
  <div id="app">
    <AppHeader v-if="authorized" />
    <AppMenu v-if="authorized" />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";

export default {
  name: "app",
  components: { AppMenu, AppHeader },
  data() {
    return {
      authorized: true,
    }
  }
};
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
</style>
