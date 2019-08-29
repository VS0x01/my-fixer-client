<template>
  <div class="person-card">
    <img :src="person.photo" class="person-card__photo" alt="photo" />
    <section class="person-info">
      <div class="person-info__main-entry">
        <span class="person-info__full-name">
          {{ person.fullName }}
        </span>
        <slot name="rating" />
      </div>
      <div class="person-info__entry">
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.49985 0C1.57013 0 3.63724e-08 1.57013 3.63724e-08 3.50005C3.63724e-08 4.00345 0.103034 4.48408 0.306086 4.92871C1.18115 6.84355 2.85888 8.86522 3.35236 9.43916C3.38933 9.48207 3.44323 9.50678 3.49995 9.50678C3.55667 9.50678 3.61057 9.48207 3.64755 9.43916C4.14083 8.86532 5.81856 6.84375 6.69391 4.92871C6.89706 4.48408 7 4.00345 7 3.50005C6.99981 1.57013 5.42968 0 3.49985 0ZM3.49985 5.31799C2.49744 5.31799 1.68182 4.50237 1.68182 3.49995C1.68182 2.49744 2.49744 1.68182 3.49985 1.68182C4.50227 1.68182 5.31789 2.49744 5.31789 3.49995C5.31798 4.50237 4.50237 5.31799 3.49985 5.31799Z"
            fill="#2A74DB"
          />
        </svg>
        <span class="person-info__values">
          Vancouver, Canada
        </span>
      </div>
      <div class="person-info__entry">
        <span class="person-info__key">
          Stack:
        </span>
        <span class="person-info__values">
          Python, Django, Sketch
        </span>
      </div>
      <div class="person-info__entry">
        <span class="person-info__key">
          Base Daily Rate:
        </span>
        <span class="person-info__values">
          $ 1,200 USD
        </span>
      </div>
    </section>
    <router-link :to="{ name: 'my-profile' }" class="more-person-info__link">
      More
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    person: Object
  }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"

.person-card
  display: flex
  justify-self: center
  width: 330px
  height: 128px
  background: #FFFFFF
  border: 1px solid rgba(237, 237, 237, 0.2)
  box-sizing: border-box
  box-shadow: -2px 9px 30px rgba(23, 31, 76, 0.02)
  border-radius: 2px
  margin: 9px

.person-card__photo
  +fixdims(76px, 76px)
  border-radius: 50%
  overflow: hidden
  margin: 18px 12px 34px 18px

.person-info
  display: flex
  flex-flow: column nowrap
  flex: 1 1 auto
  max-width: 157px
  padding: 10px 0 33px 0

  .person-info__main-entry
    display: flex
    align-items: center
    min-width: 0

    .person-info__full-name
      white-space: nowrap
      +superscription(Roboto, normal, 16px, 28px, -0.046704px, #000)

    svg
      flex: 0 0 auto

  .person-info__entry
    .person-info__key
      +superscription(Roboto, normal, 12px, 24px, -0.046704px, #01134E)

    .person-info__values
      +superscription(Roboto, 300, 12px, 12px, -0.046704px, #000)

.more-person-info__link
  +superscription(Roboto, normal, 12px, 12px, -0.046704px, #2A74DB)
  text-decoration: none
  margin: 62px 18px 54px auto
</style>
