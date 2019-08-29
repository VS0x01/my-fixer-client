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

      <section v-show="viewInformationTab === 'personal'" class="personal-info">
        <figure class="photo-wrapper">
          <img
            src="@/assets/faruh_bernandez.png"
            class="personal-info__photo"
          />
          <figcaption>
            <label for="file" class="personal-info__photo-update">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.62408 2.49908L7.98063 4.14914L3.80382 10.1143L1.4484 8.46399L5.62408 2.49908ZM9.06234 1.39465L8.0114 0.658776C7.60525 0.374386 7.04461 0.473243 6.75904 0.879601L6.05415 1.88629L8.41071 3.53637L9.23293 2.36212C9.4535 2.04709 9.37735 1.61522 9.06234 1.39465ZM0.896522 11.4646C0.888996 11.6352 1.06306 11.7561 1.22012 11.6872L3.35705 10.7523L1.00163 9.10207L0.896522 11.4646Z"
                  fill="#2A74DB"
                />
              </svg>
              Change photo
              <input
                type="file"
                id="file"
                accept="image/*"
                @change="true"
                hidden
              />
            </label>
          </figcaption>
        </figure>

        <form class="personal-info-form">
          <section class="input-wrapper">
            <label for="firstName" class="input-label">First name</label>
            <input
              type="text"
              id="firstName"
              class="input"
              placeholder="First name"
            />
          </section>
          <section class="input-wrapper">
            <label for="lastName" class="input-label">Last name</label>
            <input
              type="text"
              id="lastName"
              class="input"
              placeholder="Last name"
            />
          </section>
          <section class="input-wrapper">
            <label class="input-label">Title</label>
            <select-base-component
              :options="[{ name: 'Mr' }, { name: 'Ms' }]"
            />
          </section>
          <section class="input-wrapper">
            <label class="input-label">Mobile phone</label>
            <section class="input-phone">
              <select-base-component
                :options="[
                  { name: '🇸🇬', value: 'Singapore' },
                  { name: '🇫🇷', value: 'France' }
                ]"
              />
              <input
                type="tel"
                id="mobile"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                class="input"
              />
            </section>
          </section>
          <section class="input-wrapper">
            <label class="input-label">Country</label>
            <select-base-component :options="[]">
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99979 0C2.24304 0 5.19605e-08 2.24304 5.19605e-08 5.00007C5.19605e-08 5.71921 0.147192 6.40583 0.437266 7.04102C1.68735 9.7765 4.08412 12.6646 4.78908 13.4845C4.8419 13.5458 4.9189 13.5811 4.99993 13.5811C5.08096 13.5811 5.15796 13.5458 5.21078 13.4845C5.91547 12.6647 8.31223 9.77678 9.56273 7.04102C9.85295 6.40583 10 5.71921 10 5.00007C9.99972 2.24304 7.75668 0 4.99979 0ZM4.99979 7.59712C3.56777 7.59712 2.4026 6.43196 2.4026 4.99993C2.4026 3.56777 3.56777 2.4026 4.99979 2.4026C6.43182 2.4026 7.59698 3.56777 7.59698 4.99993C7.59712 6.43196 6.43196 7.59712 4.99979 7.59712Z"
                  fill="#2A74DB"
                />
              </svg>
            </select-base-component>
          </section>
          <section class="input-wrapper">
            <label for="company" class="input-label">Company</label>
            <input type="text" id="company" class="input" />
          </section>
        </form>
      </section>

      <section v-show="viewInformationTab === 'account'" class="account-info">
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
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.13514 0L4.85176e-08 1.08889L3.72973 4.66667L4.85176e-08 8.24444L1.13514 9.33333L6 4.66667L1.13514 0Z"
              fill="#2A74DB"
            />
          </svg>
        </router-link>
      </section>
    </main>
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";
import SelectBaseComponent from "@/components/SelectBase";

export default {
  name: "Profile",
  components: { AppHeaderComponent, AppMenuComponent, SelectBaseComponent },
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
  margin: 19px 60px 0 60px

  .information-tabs__tab
    flex: 0 1 400px
    padding: 19px
    border-bottom: 2px solid #E9E9E9
    +superscription(Roboto, bold, 16px, 19px, 0.6px, #CCD0DC)
    text-transform: uppercase

    &.active
      color: #01134E
      border-color: #2A74DB

.personal-info
  display: flex
  justify-content: center
  .photo-wrapper
    margin: 50px 0 0 60px
    text-align: center
    .personal-info__photo
      +fixdims(134px, 136.24px)

    .personal-info__photo-update
      +superscription(Roboto, normal, 12px, 14px, 0.28px, #35373B)

  .personal-info-form
    display: grid
    grid-template-columns: 1fr 1fr
    grid-column-gap: 33px
    grid-row-gap: 8px
    margin: 34px 45px
    .input-wrapper
      display: flex
      flex-flow: column nowrap
      .input-phone
        display: flex

        .select
          width: 80px
          &::before
            left: 50px

        .input
          width: 192px
          margin-left: 8px

.account-info-form
  display: flex
  justify-content: center
  margin: 30px
  .input-wrapper
    display: flex
    flex-flow: column nowrap
    margin: 16px

.input-wrapper
  .input, .select
    width: 280px
  .select::before
    left: 250px

.superscription
  display: block
  text-decoration: none
  text-align: center
</style>
