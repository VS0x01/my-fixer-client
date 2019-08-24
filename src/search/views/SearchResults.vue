<template>
  <div id="search-results">
    <div class="search-results__top">
      <router-link :to="{ name: 'map' }" tag="span" class="superscription">
        Show map
      </router-link>
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
    <section class="found-people">
      <person-card-component v-for="person in people" :key="person.id" :person="person">
        <template v-slot:rating v-if="person.rating">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <circle cx="13" cy="12" r="8" fill="white" />
            </g>
            <path
              d="M18.6001 10.4683L14.8907 9.68539L13.0001 6.39966V15.5044L16.461 17.0514L16.0593 13.2817L18.6001 10.4683Z"
              :fill="rating[person.rating].colors[1]"
            />
            <path
              d="M11.1094 9.68576L7.4 10.4686L9.94083 13.2821L9.5391 17.0517L13 15.5047V6.40002L11.1094 9.68576Z"
              :fill="rating[person.rating].colors[0]"
            />
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="26"
                height="26"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.513291 0 0 0 0 0.541829 0 0 0 0 0.635371 0 0 0 0.24 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </template>
      </person-card-component>
    </section>
  </div>
</template>

<script>
import PersonCardComponent from "@/search/components/PersonCard";

export default {
  name: "SearchResults",
  components: { PersonCardComponent },
  props: {
    people: Array
  },
  data() {
    return {
      rating: {
        gold: {
          colors: ["#FFE060", "#F9C800"]
        },
        silver: {
          colors: ["#D4D4D4", "#B8B6B6"]
        },
        bronze: {
          colors: ["#FB9E48", "#D86F0F"]
        }
      }
    };
  }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"

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

.found-people
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))
  padding: 0 47px 0 32px
  margin: 10px 60px 27px 0
  overflow-y: scroll

  +scrollbar(#E0E6F0, #F5F7FA, 8px)
</style>
