<template>
  <div id="profile">
    <AppHeaderComponent />
    <AppMenuComponent />
    <main class="content">
      <div class="information-tabs">
        <span
          class="information-tabs__tab"
          :class="{
            active: viewInformationTab === informationTab
          }"
          v-for="(informationTab, i) in informationTabs"
          :key="i"
          @click="viewInformationTab = informationTab"
        >
          {{ informationTab }} information
        </span>
      </div>
    </main>
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";

export default {
  name: "Profile",
  components: { AppHeaderComponent, AppMenuComponent },
  data() {
    return {
      informationTabs: ["personal", "accounts"],
      viewInformationTab: "personal"
    };
  }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"

.content
  display: flex
  flex-flow: column nowrap
  margin: 42px 52px 0 124px
  height: calc(100vh - 150px)
  background: #FFF
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)
  border-radius: 4px

.information-tabs
  display: flex
  justify-content: center
  text-align: center
  margin: 19px 60px

  .information-tabs__tab
    flex: 0 1 400px
    padding: 19px
    border-bottom: 2px solid #E9E9E9
    +superscription(Roboto, bold, 16px, 19px, 0.6px, #CCD0DC)
    text-transform: uppercase

    &.active
      color: #01134E
      border-color: #2A74DB
</style>
