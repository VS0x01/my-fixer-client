<template>
  <div class="person-card">
    <img
      src="@/assets/miranda_hops.png"
      class="person-card__photo"
      alt="photo"
    />
    <section class="person-info">
      <span class="person-info__full-name"
        >{{ person.fullName }}<slot name="rating"
      /></span>
    </section>
    <router-link :to="{ name: 'profile' }" class="more-person-info"
      >More</router-link
    >
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
  margin: 18px 16px 34px 18px

.person-info
  box-sizing: border-box
  flex: 1 1 auto
  padding: 18px 6px 33px 0

  .person-info__full-name
    +superscription(Roboto, normal, 16px, 28px, -0.046704px, #000)

.more-person-info
  +superscription(Roboto, normal, 12px, 12px, -0.046704px, #2A74DB)
  text-decoration: none
  margin: 62px 27px 54px 0
</style>
