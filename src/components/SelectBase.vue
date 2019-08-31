<template>
  <div class="select">
    <slot />
    <select class="input">
      <option
        v-for="(option, i) in options"
        :key="i"
        :value="option.value || option.name"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectBase",
  props: {
    id: {
      type: String
    },
    options: {
      type: Array
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../shared/sass/mixins"

.select
  box-sizing: border-box
  width: 250px
  border: 2px solid #F2F2F2
  border-radius: 2px
  margin-bottom: 20.37px
  background: #FCFCFC

  &::before
    content: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.39626 5.15214L0.683169 1.38059C0.44685 1.14068 0.44685 0.751695 0.683169 0.511895C0.919278 0.272077 1.30222 0.272077 1.53831 0.511895L4.82383 3.84913L8.10923 0.511992C8.34543 0.272174 8.72834 0.272174 8.96445 0.511992C9.20065 0.751811 9.20065 1.14077 8.96445 1.38069L5.2513 5.15224C5.13319 5.27214 4.97856 5.33203 4.82385 5.33203C4.66906 5.33203 4.51431 5.27203 4.39626 5.15214Z' fill='%2301134E'/%3E%3C/svg%3E%0A")
    position: relative
    left: 220px
    pointer-events: none

.input
  appearance: none
  flex: 1 0 auto
  height: 37px
  padding: 10px 0 10px 4px
  border: none
  background: inherit
  outline: none

  &:-moz-focusring
    color: transparent
    text-shadow: 0 0 0 #000

  +superscription(Roboto, normal, 14px, 16px, 0.28px, #35373B)
</style>
