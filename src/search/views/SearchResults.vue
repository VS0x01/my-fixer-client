<template>
  <div id="search-results">
    <div class="search-results__top">
      <router-link
        :to="{ name: 'searchMap' }"
        tag="span"
        class="superscription"
      >
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
        <label for="rating" class="sort-label">by price</label>
      </div>
    </div>
    <!-- <section class=""></section> +scrollbar(#E0E6F0, ##F5F7FA, 8px) -->
  </div>
</template>

<script>
export default {
  name: "SearchResults"
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"

.search-results__top
  display: flex
  svg
    margin: 43px 23px 17px auto

.superscription
  display: inline-block
  margin: 43px auto 17px 41px
  font-weight: 600

.search-results__sort
  display: flex

#price, #rating
  appearance: none
  background: #FFF
  border: 1px solid #F0F1F3
  border-radius: 50%
  box-shadow: 0 1px 7px rgba(204, 202, 212, 0.58)
  width: 18px
  height: 18px

  &:focus
    outline: none

  &:checked
    background: #0AD69C
    background-clip: content-box
    padding: 5px

.sort-label
  +superscription(Roboto, 300, 14px, 28px, -0.046704px, #000)
  margin: 0 20px 0 10px
</style>
