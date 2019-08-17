<template>
  <div id="search">
    <app-header-component />
    <app-menu-component />

    <main class="content">
      <form class="search-form">
        <section class="inputs-section">
          <select-base-component id="location" :options="['Canada', 'Ukraine']">
            <svg
              class="location"
              width="8"
              height="11"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.99983 0C1.79443 0 4.15684e-08 1.79443 4.15684e-08 4.00006C4.15684e-08 4.57537 0.117753 5.12466 0.349813 5.63281C1.34988 7.8212 3.26729 10.1317 3.83126 10.7876C3.87352 10.8366 3.93512 10.8649 3.99994 10.8649C4.06477 10.8649 4.12637 10.8366 4.16862 10.7876C4.73237 10.1318 6.64978 7.82143 7.65019 5.63281C7.88236 5.12466 8 4.57537 8 4.00006C7.99978 1.79443 6.20535 0 3.99983 0ZM3.99983 6.0777C2.85421 6.0777 1.92208 5.14557 1.92208 3.99995C1.92208 2.85421 2.85421 1.92208 3.99983 1.92208C5.14545 1.92208 6.07759 2.85421 6.07759 3.99995C6.0777 5.14557 5.14557 6.0777 3.99983 6.0777Z"
                fill="#2A74DB"
              />
            </svg>
          </select-base-component>

          <label for="query" class="input-label">Search</label>
          <input
            type="search"
            id="query"
            class="input"
            placeholder="Type your query..."
          />

          <select-base-component
            id="category"
            :options="['Category1', 'Category2']"
          />
          <select-base-component
            id="service"
            :options="['3 services', '4 services']"
          />

          <label class="input-label">Period</label>
          <date-range-picker
            ref="picker"
            :locale-data="{ firstDay: 1, format: 'DD/MM/YYYY' }"
            v-model="dateRange">
            <div slot="input" slot-scope="picker" style="min-width: 350px;">
              {{ picker.startDate }} - {{ picker.endDate }}
            </div>
          </date-range-picker>
        </section>
      </form>
    </main>
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";
import SelectBaseComponent from "@/components/SelectBase";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  name: "Search",
  components: {
    AppHeaderComponent,
    AppMenuComponent,
    SelectBaseComponent,
    DateRangePicker
  },
  data() {
    return {
      dateRange: {},
    };
  }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"

.content
  display: flex
  margin: 42px 52px 0 124px
  height: calc(100vh - 150px)
  background: #FFF
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)
  border-radius: 4px

  +tablets
    margin: 22px

.search-form
  padding: 29px 45px

.inputs-section
  display: flex
  flex-flow: column nowrap

.input-label
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: 500
  font-size: 12px
  line-height: 14px
  letter-spacing: 1px
  text-transform: uppercase
  color: #546087

.location
  margin: 0 4px

.input
  box-sizing: border-box
  width: 250px
  height: 41px
  padding: 10px 0 10px 4px
  border: 2px solid #F2F2F2
  border-radius: 2px
  margin-bottom: 20.37px
  background: #FCFCFC
  outline: none
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 16px
  letter-spacing: 0.28px
  color: #35373B

.date
  border: none
  outline: none
</style>
