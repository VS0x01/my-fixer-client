<template>
  <div id="search">
    <app-header-component />
    <app-menu-component />

    <main class="content">
      <form class="search-form">
        <section class="inputs-section">
          <label class="input-label">Location</label>
          <select-base-component :options="[]">
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

          <label class="input-label">Category</label>
          <select-base-component :options="[]" />

          <label class="input-label">Service</label>
          <select-base-component :options="[]" />

          <label class="input-label">Period</label>
          <date-range-picker
            ref="picker"
            :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
            :min-date="dateRangePicker.minDate"
            :ranges="dateRangePicker.show_ranges"
            :opens="dateRangePicker.opens"
            :autoApply="dateRangePicker.autoApply"
            :dateFormat="dateFormat"
            :date-range="dateRangePicker.dateRange"
            v-model="dateRangePicker.dateRange"
          >
            <template v-slot:input="picker">
              <div class="input date">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9833 3.42664C12.606 3.42664 13.1103 2.92569 13.1103 2.30302V1.12587C13.1103 0.502641 12.606 0 11.9833 0C11.3612 0 10.8586 0.502641 10.8586 1.12587V2.30302C10.8586 2.92569 11.3612 3.42664 11.9833 3.42664Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M15.9837 1.94817H13.7178V2.52125C13.7178 3.46568 12.9498 4.23598 12.0031 4.23598C11.0553 4.23598 10.2895 3.46568 10.2895 2.52125V1.94817H5.71557V2.52125C5.71557 3.46568 4.94752 4.23598 4.00085 4.23598C3.05417 4.23598 2.28724 3.46511 2.28724 2.52069V1.94817L1.27631e-09 1.91943V16.2334H1.14334H14.8589L16 16.2301L15.9837 1.94817ZM14.8589 15.0935H1.14334V5.94902H14.8589V15.0935Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M3.98278 3.42664C4.60544 3.42664 5.10865 2.92569 5.10865 2.30302V1.12587C5.10865 0.502641 4.60601 0 3.98278 0C3.36124 0 2.85803 0.502641 2.85803 1.12587V2.30302C2.85803 2.92569 3.36124 3.42664 3.98278 3.42664Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M7.51992 7.17651H5.71954V8.76615H7.51992V7.17651Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M4.70236 7.17651H2.90198V8.76615H4.70236V7.17651Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M10.4343 7.17651H8.63165V8.76615H10.4343V7.17651Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M13.1328 7.17651H11.3324V8.76615H13.1328V7.17651Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M7.51992 9.81641H5.71954V11.4049H7.51992V9.81641Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M10.4343 9.81641H8.63165V11.4049H10.4343V9.81641Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M13.1328 9.81641H11.3324V11.4049H13.1328V9.81641Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M7.51992 12.5085H5.71954V14.097H7.51992V12.5085Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M4.65729 9.81641H2.85803V11.4049H4.65729V9.81641Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M4.65729 12.5085H2.85803V14.097H4.65729V12.5085Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M10.4343 12.5085H8.63165V14.097H10.4343V12.5085Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M13.1328 12.5085H11.3324V14.097H13.1328V12.5085Z"
                    fill="#546087"
                    fill-opacity="0.3"
                  />
                </svg>
                {{ picker.startDate | date }} - {{ picker.endDate | date }}
              </div>
            </template>
          </date-range-picker>

          <button type="submit" class="search-form__submit">Search</button>
        </section>
      </form>

      <div id="search-results">
        <div class="search-results__top">
          <span class="superscription" @click="showResults = ++showResults % 2">
            Show {{ showResults === 0 ? "map" : "results" }}
          </span>
          <div class="search-results__sort">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="6.07874"
                x2="1"
                y2="10.8502"
                stroke="#01134E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="4.64284"
                y1="4.38574"
                x2="4.64284"
                y2="10.8501"
                stroke="#01134E"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="8.28575"
                y1="2.69287"
                x2="8.28575"
                y2="10.8501"
                stroke="#01134E"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="11.9286"
                y1="1"
                x2="11.9286"
                y2="10.8501"
                stroke="#01134E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="radio" id="price" name="sort" value="price" checked />
            <label for="price" class="sort-label">by price</label>
            <input type="radio" id="rating" name="sort" value="rating" />
            <label for="rating" class="sort-label">by rating</label>
          </div>
        </div>
        <search-results-component
          v-show="showResults === 0"
          :people="people"
        />
        <search-map-component v-show="showResults === 1" />
      </div>
    </main>
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";
import SelectBaseComponent from "@/components/SelectBase";
import moment from "moment";
import DateRangePicker from "vue2-daterange-picker";
import SearchResultsComponent from "@/search/views/SearchResults";
import SearchMapComponent from "@/search/views/SearchMap";

export default {
  name: "Search",
  components: {
    AppHeaderComponent,
    AppMenuComponent,
    SelectBaseComponent,
    DateRangePicker,
    SearchResultsComponent,
    SearchMapComponent
  },

  filters: {
    date(value) {
      return moment(value).format("DD/MM/YYYY");
    }
  },

  data() {
    return {
      results: ["results", "map"],
      showResults: 0,
      people: [
        {
          id: 1,
          fullName: "Richard Thompson",
          photo:
            "https://vs0x01-myfixer.s3.eu-central-1.amazonaws.com/avatar_circle_blue_512dp.png",
          rating: "gold"
        },
        {
          id: 2,
          fullName: "Miranda Hops",
          photo:
            "https://vs0x01-myfixer.s3.eu-central-1.amazonaws.com/avatar_circle_blue_512dp.png",
          rating: "silver"
        },
        {
          id: 3,
          fullName: "First Last",
          photo:
            "https://vs0x01-myfixer.s3.eu-central-1.amazonaws.com/avatar_circle_blue_512dp.png",
          rating: "bronze"
        }
      ],
      dateRangePicker: {
        opens: "right",
        minDate: moment(Date.now())
          .add(1, "day")
          .format(),
        dateRange: {
          startDate: moment(Date.now())
            .add(1, "day")
            .format(),
          endDate: moment(Date.now())
            .add(1, "day")
            .format()
        },
        show_ranges: false,
        autoApply: true
      }
    };
  },
  methods: {
    dateFormat(classes, date) {
      let today = moment();
      if (classes.today) {
        classes.disabled = !date.isSame(today, "day");
      }
      return classes;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"
@import "../../shared/sass/inputs"

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
  height: fit-content
  padding: 0 45px
  margin: 29px 0
  border-right: 1px solid #E7EAF5

.inputs-section
  display: flex
  flex-flow: column nowrap

.location
  margin: 0 4px

.input
  +superscription(Roboto, normal, 14px, 16px, 0.28px, #35373B)

  &.date
    display: flex
    align-items: center

    svg
      margin-right: 14px

.search-form__submit
  height: 43px
  margin: 12px 0
  background: #0AD69C
  outline: none
  border: none
  border-radius: 2px

  +superscription(Roboto, bold, 14px, 16px, 0.4px, #FFF)
  text-transform: uppercase

#search-results
  flex: 1 1 auto
  display: flex
  flex-flow: column nowrap

.search-results__top
  display: flex

  .search-results__sort
    display: flex
    align-items: center
    margin: 43px 108px 17px auto

.superscription
  display: inline-block
  margin: 43px auto 17px 41px
  font-weight: 600

#price, #rating
  appearance: none
  background: #FFF
  border: 1px solid #F0F1F3
  border-radius: 50%
  margin: 0 10px 0 23px
  width: 18px
  height: 18px

  &:focus
    outline: none

  &:checked
    background: #0AD69C
    background-clip: content-box
    padding: 5px
    box-shadow: 0 1px 7px rgba(204, 202, 212, 0.58)

.sort-label
  +superscription(Roboto, 300, 14px, 28px, -0.046704px, #000)
</style>
