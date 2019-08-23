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

      <section v-show="viewInformationTab === 'personal'">
        <form></form>
      </section>
      <section v-show="viewInformationTab === 'account'">
        <form class="account-info-form">
          <section class="input-wrapper">
            <label for="username" class="input-label">Username</label>
            <input
              type="text"
              id="username"
              class="input"
              placeholder="Username"
            />
          </section>
          <section class="input-wrapper">
            <label for="email" class="input-label">E-mail</label>
            <input
                type="email"
                id="email"
                class="input"
                placeholder="example@example.com"
            />
          </section>
        </form>
        <router-link to="/" class="superscription">
          Change password
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.13514 0L4.85176e-08 1.08889L3.72973 4.66667L4.85176e-08 8.24444L1.13514 9.33333L6 4.66667L1.13514 0Z" fill="#2A74DB"/>
          </svg>
        </router-link>
      </section>
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
      informationTabs: ["personal", "account"],
      viewInformationTab: "personal"
    };
  }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"
@import "../../shared/sass/inputs"

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

.account-info-form
  display: flex
  justify-content: center
  margin: 30px
  .input-wrapper
    display: flex
    flex-flow: column nowrap
    margin: 16px

.superscription
  display: block
  text-decoration: none
  text-align: center

</style>
