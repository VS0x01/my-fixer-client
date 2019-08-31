<template>
  <div id="admin">
    <app-header-component />
    <app-menu-component />

    <main class="content">
      <label for="search" class="searchbar">
        <input
          type="search"
          id="search"
          class="text-input"
          placeholder="Type here to search..."
        />
      </label>

      <table>
        <thead class="superscription">
          <th>First name</th>
          <th>Last name</th>
          <th>Country</th>
          <th>Status</th>
          <th>Level</th>
          <th>E-mail</th>
          <th class="close"></th>
        </thead>

        <tbody>
          <tr>
            <td>First name</td>
            <td>Last name</td>
            <td>Country</td>
            <td>Status</td>
            <td>
              <select-base-component
                :options="[
                  { name: 'Gold' },
                  { name: 'Silver' },
                  { name: 'Bronze' }
                ]"
              />
            </td>
            <td>E-mail</td>
            <td class="close">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.9L8.1 0L4.5 3.6L0.9 0L0 0.9L3.6 4.5L0 8.1L0.9 9L4.5 5.4L8.1 9L9 8.1L5.4 4.5L9 0.9Z"
                  fill="#A9AFC5"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";
import SelectBaseComponent from "@/components/SelectBase";

export default {
  name: "Admin",
  components: { AppMenuComponent, AppHeaderComponent, SelectBaseComponent }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"
@import "../../shared/sass/inputs"

.content
  display: flex
  flex-flow: column nowrap
  padding: 61px
  margin: 42px 52px 0 124px
  height: calc(100vh - 150px)
  background: #FFF
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)
  border-radius: 4px

  +tablets
    margin: 22px

.searchbar
  align-self: flex-end

table
  border-spacing: 0

  .superscription
    background: #F5F7FA
    border-radius: 2px
    font-weight: 600
    letter-spacing: 0.6px

    th
      padding: 14px 30px 13px 30px

    .close
      width: 9px

  tbody
    background: #FFFFFF
    border: 1px solid #DAE4F2
    box-sizing: border-box
    box-shadow: -2px 9px 8px rgba(23, 31, 76, 0.03)
    border-radius: 4px

    tr
      td
        padding: 18px 30px 16px 30px

      .select
        display: flex
        align-items: center
        background: inherit
        width: auto
        border: none
        margin: 0

        &::before
          order: 1
          position: static

      .close
        cursor: pointer
</style>
