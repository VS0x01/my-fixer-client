<template>
  <div id="messenger">
    <app-header-component />
    <app-menu-component />

    <main class="content">
      <section class="dialogs">
        <div class="dialog">
          <div class="dialog__photo person_online muted">
            <img src="@/assets/miranda_hops.png" alt="person`s photo" />
          </div>
          <div class="dialog__person-strings">
            <time class="time">9:32</time>
            <div class="dialog__attrs">
              <span class="dialog__person person_online muted">
                Miranda Hops
              </span>

              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.98809 6.27886C2.00229 6.27886 2.03069 6.27886 2.03069 6.27886L5.68025 2.37696V0.800897C5.68025 0.54077 5.38203 0.403056 5.19743 0.556072L2.17269 3.15734C2.13009 3.18794 2.05909 3.21854 1.98809 3.21854H0.255611C0.0994042 3.21854 0 3.35626 0 3.52458V5.97283C0 6.14114 0.0852036 6.27886 0.255611 6.27886H1.98809Z"
                  fill="#9BA0AD"
                />
                <path
                  d="M7.90954 1.04591C7.79594 0.923498 7.62553 0.923498 7.51193 1.04591L0.156005 8.97212C0.0423995 9.09454 0.0423995 9.27816 0.156005 9.40057C0.212807 9.46177 0.28381 9.49238 0.354813 9.49238C0.425816 9.49238 0.496819 9.46177 0.553622 9.40057L2.85412 6.92171L5.21143 8.92622C5.39603 9.07924 5.69425 8.94152 5.69425 8.68139V3.92261L7.93794 1.48966C8.03735 1.36724 8.00895 1.16832 7.90954 1.04591Z"
                  fill="#9BA0AD"
                />
              </svg>
            </div>
            <span class="dialog__preview">Excepteur sint occaecatar...</span>
          </div>
        </div>

        <div class="dialog">
          <div class="dialog__photo">
            <img src="@/assets/barry_callebaut.png" alt="person`s photo" />
          </div>
          <div class="dialog__person-strings">
            <time class="time">22:01</time>
            <div class="dialog__attrs">
              <span class="dialog__person">
                Barry Callebaut
              </span>
            </div>
            <span class="dialog__preview">Nemo enim ipsam volupta...</span>
          </div>
        </div>

        <div class="dialog dialog_chosen">
          <div class="dialog__photo person_online">
            <img src="@/assets/stacey_dosh_f.png" alt="person`s photo" />
          </div>
          <div class="dialog__person-strings">
            <time class="time">19:15</time>
            <div class="dialog__attrs">
              <span class="dialog__person person_online">
                Stacey Dosh
              </span>
            </div>
            <span class="dialog__preview">Ut enim ad minima veniam...</span>
          </div>
        </div>

        <div class="dialog">
          <div class="dialog__photo">
            <img src="@/assets/michael_kors.png" alt="person`s photo" />
          </div>
          <div class="dialog__person-strings">
            <time class="time">13:49</time>
            <div class="dialog__attrs">
              <span class="dialog__person">
                Michael Kors
              </span>
            </div>
            <span class="dialog__preview">To take a trivial example...</span>
          </div>
        </div>

        <div class="dialog">
          <div class="dialog__photo person_online">
            <img src="@/assets/johny_cash.png" alt="person`s photo" />
          </div>
          <div class="dialog__person-strings">
            <time class="time">10:29</time>
            <div class="dialog__attrs">
              <span class="dialog__person person_online">
                Johny Cash
              </span>
            </div>
            <span class="dialog__preview">Great explorer of the truth...</span>
          </div>
        </div>

        <div class="dialog">
          <div class="dialog__photo">
            <img src="@/assets/stacey_dosh_s.png" alt="person`s photo" />
          </div>
          <div class="dialog__person-strings">
            <time class="time">08:53</time>
            <div class="dialog__attrs">
              <span class="dialog__person">
                Stacey Dosh
              </span>
            </div>
            <span class="dialog__preview">Ut enim ad minima veniam...</span>
          </div>
        </div>
      </section>

      <section class="messages">
        <div class="messages__searchbar">
          <input
            class="messages__input-text"
            type="search"
            placeholder="Search message..."
          />
        </div>

        <div class="messages-container">
          <time class="messages__date">Today, 17.03.2018</time>

          <div class="message message-incoming">
            <img
              class="dialog__photo"
              src="@/assets/stacey_dosh_f.png"
              alt="person`s photo"
            />

            <p class="message__data">
              On the other hand, we denounce with righteous indignation!
              <time class="time">01:14</time>
            </p>
          </div>

          <div class="message message-sent">
            <p class="message__data">
              Which is the same as saying?
              <time class="time">01:38</time>
            </p>
          </div>

          <div class="message message-incoming">
            <img
              class="dialog__photo"
              src="@/assets/stacey_dosh_f.png"
              alt="person`s photo"
            />

            <p class="message__data">
              But in certain circumstances and owing to the claims of duty or
              the obligations of business it will frequently occur that
              pleasures
              <time class="time">01:14</time>
            </p>
          </div>

          <div class="message message-sent">
            <p class="message__data">
              To take a trivial example, which of us ever undertakes)
              <time class="time">01:38</time>
            </p>
          </div>
        </div>

        <form class="messages__send">
          <input
            class="messages__input-text"
            type="text"
            placeholder="Write a message"
          />
          <div class="messages__actions">
            <button class="messages__action">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2242 3.44495C12.7132 -0.115601 7.00052 -0.115601 3.49002 3.44397C-0.0209656 7.00354 -0.0207214 12.7955 3.49051 16.3561C7.00052 19.9156 12.7132 19.9156 16.2239 16.3551C19.7346 12.7955 19.7344 7.00354 16.2242 3.44495ZM15.2417 15.359C12.2727 18.3698 7.44144 18.3698 4.4722 15.36C1.50247 12.3483 1.50296 7.44983 4.4722 4.43909C7.44144 1.42834 12.2725 1.42834 15.2422 4.43909C18.2112 7.44983 18.2107 12.3492 15.2417 15.359ZM7.55081 6.36096C6.96951 6.36096 6.49832 6.8385 6.49832 7.42834C6.49832 8.01721 6.96951 8.49573 7.55081 8.49573C8.13162 8.49573 8.60306 8.01721 8.60306 7.42834C8.60306 6.8385 8.13162 6.36096 7.55081 6.36096ZM11.2705 7.42834C11.2705 6.8385 11.7422 6.36096 12.3233 6.36096C12.9043 6.36096 13.3755 6.8385 13.3755 7.42834C13.3755 8.01721 12.9043 8.49573 12.3233 8.49573C11.7422 8.49573 11.2705 8.01721 11.2705 7.42834ZM9.86746 14.316C11.5789 14.316 13.1062 13.3278 13.7586 11.7985C13.8701 11.5367 13.7513 11.233 13.4932 11.1198C13.2351 11.0065 12.9356 11.1276 12.8238 11.3893C12.333 12.5406 11.1724 13.2838 9.86746 13.2838C8.53201 13.2838 7.36478 12.5406 6.89334 11.3903C6.81204 11.191 6.62259 11.0719 6.42313 11.0719C6.35794 11.0719 6.29178 11.0846 6.22781 11.111C5.96805 11.2203 5.845 11.5231 5.95291 11.7858C6.58255 13.3229 8.11917 14.316 9.86746 14.316Z"
                  fill="#BBC3CF"
                ></path>
              </svg>
            </button>
            <button class="messages__action">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.487 2.31344C16.4696 0.267914 13.1981 0.267914 11.1808 2.31344L1.13524 12.499C-0.378414 14.0338 -0.378414 16.5206 1.13524 18.0555C2.38285 19.3205 4.26462 19.5247 5.73568 18.7037C5.88935 18.6958 6.04046 18.6369 6.15802 18.519L16.2035 8.33343C17.2122 7.31069 17.2122 5.6528 16.2035 4.63006C15.1948 3.60733 13.5598 3.60733 12.5511 4.63006L4.33178 12.964C4.07991 13.2193 4.07991 13.6345 4.33178 13.8898C4.58364 14.1452 4.99306 14.1452 5.24487 13.8898L13.4642 5.55589C13.9692 5.04386 14.7867 5.04386 15.2904 5.55589C15.7954 6.06792 15.7954 6.89684 15.2904 7.4076L5.70082 17.1309C4.69215 18.1536 3.05706 18.1536 2.04839 17.1309C1.03972 16.1082 1.03972 14.4503 2.04839 13.4275L12.0939 3.23927C13.6075 1.7045 16.0602 1.7045 17.5739 3.23927C19.0875 4.77404 19.0875 7.26085 17.5739 8.79568L8.44146 18.0555C8.18959 18.3108 8.18959 18.726 8.44146 18.9813C8.69333 19.2367 9.10274 19.2367 9.35455 18.9813L18.487 9.72151C20.5043 7.67603 20.5043 4.35897 18.487 2.31344Z"
                  fill="#BBC3CF"
                ></path>
              </svg>
            </button>
            <button
              type="submit"
              class="messages__action messages__action-send"
            >
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9726 0.978285L0.548796 10.5489C-0.209082 10.9424 -0.17799 11.5191 0.617199 11.831L2.96934 12.7519C3.76298 13.063 4.96625 12.8944 5.64096 12.3716L15.8564 4.3918C16.528 3.86741 16.6003 3.94519 16.0165 4.56429L7.94024 13.1293C7.35493 13.7461 7.52905 14.5022 8.32501 14.8095L8.60018 14.9165C9.39615 15.2214 10.6974 15.7343 11.4894 16.0546L14.0981 17.1064C14.891 17.426 15.5392 17.6909 15.5392 17.6955C15.5392 17.7001 15.5439 17.7148 15.5478 17.7155C15.5517 17.7171 15.739 17.0502 15.9629 16.2325L19.9411 1.75062C20.165 0.932083 19.7305 0.585573 18.9726 0.978285Z"
                  fill="#0AD69C"
                ></path>
                <path
                  d="M8.12649 16.3977L6.44868 15.5896C5.71311 15.2349 5.36049 15.6508 5.66542 16.5159C5.66614 16.5159 7.22328 20.934 7.17993 21.0897C7.13513 21.2445 8.6742 18.4681 8.6742 18.4681C9.10919 17.6838 8.86207 16.7524 8.12649 16.3977Z"
                  fill="#0AD69C"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import AppHeaderComponent from "@/components/AppHeader";
import AppMenuComponent from "@/components/AppMenu";

export default {
  name: "Messenger",
  components: { AppHeaderComponent, AppMenuComponent }
};
</script>

<style lang="sass" scoped>
@import "../../shared/sass/mixins"

.content
  display: flex
  margin: 42px 52px 0 124px
  height: calc(100vh - 150px)

  +tablets
    margin: 22px

.dialogs
  display: grid
  grid-auto-rows: 91px
  flex: 0 0 auto
  overflow-y: scroll

  +scrollbar(#F7F9FC, #EDF0F4, 1px)

  &::-webkit-scrollbar-thumb:hover
    background: #DEE4F1

  +tablets
    display: flex
    flex-direction: column

.dialog
  display: flex
  width: 300px
  height: 91px
  align-items: center

  +tablets
    flex-direction: column
    align-items: stretch
    width: auto
    height: auto
    margin: 5px
    .dialog__photo
      position: relative
      margin: 0

.dialog_chosen
  box-shadow: 0 5px 5px rgba(190, 200, 212, 0.2), 0 -5px 5px rgba(224, 224, 224, 0.15)

.person_online
  &::after
    content: ""
    background: #0AD69C
    width: 6px
    height: 7px
    border-radius: 50%

.dialog__photo
  +fixdims(50px, 50.7px)
  align-self: center
  margin: 0 14px 0 21px

  img
    +fixdims(inherit, inherit)
    border-radius: 50%
    overflow: hidden

  &.person_online
    &::after
      display: none
      +tablets
        display: block
        position: relative
        bottom: 15px
        right: -40px
  &.muted
    +tablets
      &::before
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='10' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.98809 6.27886C2.00229 6.27886 2.03069 6.27886 2.03069 6.27886L5.68025 2.37696V0.800897C5.68025 0.54077 5.38203 0.403056 5.19743 0.556072L2.17269 3.15734C2.13009 3.18794 2.05909 3.21854 1.98809 3.21854H0.255611C0.0994042 3.21854 0 3.35626 0 3.52458V5.97283C0 6.14114 0.0852036 6.27886 0.255611 6.27886H1.98809Z' fill='%239BA0AD'/%3e%3cpath d='M7.90954 1.04591C7.79594 0.923498 7.62553 0.923498 7.51193 1.04591L0.156005 8.97212C0.0423995 9.09454 0.0423995 9.27816 0.156005 9.40057C0.212807 9.46177 0.28381 9.49238 0.354813 9.49238C0.425816 9.49238 0.496819 9.46177 0.553622 9.40057L2.85412 6.92171L5.21143 8.92622C5.39603 9.07924 5.69425 8.94152 5.69425 8.68139V3.92261L7.93794 1.48966C8.03735 1.36724 8.00895 1.16832 7.90954 1.04591Z' fill='%239BA0AD'/%3e%3c/svg%3e ")
        position: absolute
        top: 38px
        left: 46px

.dialog__attrs
  padding-bottom: 5px

  svg
    +tablets
      display: none

.dialog__person-strings
  display: grid
  flex-grow: 1
  align-self: flex-start
  +tablets
    align-self: center
    grid-template-rows: 1fr 0 0
    .time,
    .dialog__preview
      display: none
  +phones
    .dialog__person
      display: none

.time
  margin: 13px 10px 0 auto
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 12px
  line-height: 14px
  letter-spacing: 0.428571px
  color: #9BA0AD

.dialog__person
  margin-bottom: 5px
  font-family: 'Exo 2', sans-serif
  font-style: normal
  font-weight: 500
  font-size: 16px
  line-height: 19px
  letter-spacing: 0.571429px
  color: #01134E
  +tablets
    display: flex
    flex-direction: column

  &.person_online
    &::after
      display: inline-block
      margin-bottom: 16px
      +tablets
        display: none

.dialog__preview
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #252F48
  mix-blend-mode: normal
  opacity: 0.43

.messages
  flex: 1 1 auto
  display: grid
  grid-template-rows: 47px 1fr 61px
  overflow-x: scroll
  background: #FFFFFF
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)
  border-radius: 4px

  +scrollbar(#DEE4F1, #F5F6F7, 1px)

.messages-container
  overflow-y: scroll
  display: flex
  flex-direction: column

  +scrollbar(#DEE4F1, #F5F6F7, 8px)

.messages__searchbar
  display: flex
  align-items: center
  border-bottom: 1px solid #F5F6F9
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)
  border-radius: 4px

  &::before
    content: url("data:image/svg+xml,%3Csvg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.6172 10.499L14.0684 14.1387C14.3604 14.4463 14.3506 14.9375 14.0474 15.2334C13.9045 15.373 13.7163 15.4492 13.5181 15.4492C13.3086 15.4492 13.113 15.3652 12.9678 15.2119L9.49023 11.5449C8.50293 12.248 7.3479 12.6191 6.13599 12.6191C2.90771 12.6191 0.28125 9.95605 0.28125 6.68262C0.28125 3.40918 2.90771 0.746094 6.13599 0.746094C9.36426 0.746094 11.9907 3.40918 11.9907 6.68262C11.9907 8.08301 11.5044 9.42969 10.6172 10.499ZM10.4634 6.68262C10.4634 4.26367 8.52222 2.29492 6.13599 2.29492C3.74976 2.29492 1.80859 4.26367 1.80859 6.68262C1.80859 9.10254 3.74976 11.0703 6.13599 11.0703C8.52222 11.0703 10.4634 9.10254 10.4634 6.68262Z' fill='%23BBC3CF'/%3E%3C/svg%3E")
    padding: 2px 18px 0 18px

.messages__input-text
  flex: 1 1 auto
  margin-right: 16px
  border: none
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 18px
  letter-spacing: 0.5px
  color: #252F48
  mix-blend-mode: normal
  opacity: 0.2
  outline: none

.messages__date
  align-self: center
  font-family: 'Exo 2', sans-serif
  font-style: normal
  font-weight: 500
  font-size: 14px
  line-height: 17px
  letter-spacing: 0.5px
  color: #CACED9

.message
  display: flex
  margin: 10px 0 10px 0

  .time
    position: relative
    right: -35px

%message__data
  display: flex
  align-items: flex-end
  min-width: 50%
  max-width: 70%
  background: #F7F9FC
  border-radius: 5px
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 20px
  color: #222428

.message-incoming
  align-self: flex-start

  .message__data
    @extend %message__data
    padding: 12px 40px 12px 0

    &::before
      content: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5003 15.0002C16.3222 15 1.07154 15.0664 0.5 15.0006C12 11.5003 13.9344 1.57112 14.0002 0.999579C14.0661 0.428038 27.4236 15.0003 21.5003 15.0002Z' fill='%23F7F9FC'/%3E%3C/svg%3E%0A")
      display: block
      position: relative
      left: -14px
      bottom: -18px

  .dialog__photo
    +fixdims(36px, 36.62px)
    margin-right: 11px

.message-sent
  align-self: flex-end

  .message__data
    @extend %message__data
    padding: 12px 12px 12px 30px
    margin: 0 25px 0 auto

    &::after
      content: url("data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.50024 14.9986C7.67836 14.9984 23.4287 15.064 24.0003 14.9982C12.5002 11.4978 10.066 1.57034 10.0002 0.998795C9.93439 0.427253 -3.42304 14.9987 2.50024 14.9986Z' fill='%23F7F9FC'/%3E%3C/svg%3E%0A")
      position: relative
      right: -26px
      bottom: -18.4px

.messages__send
  display: flex
  padding: 0 20px 0 30px
  align-items: center
  box-shadow: 0 0 20px rgba(153, 163, 174, 0.146541)

.messages__actions
  display: flex

.messages__action
  cursor: pointer
  width: 36px
  height: 36.5px
  margin: 0 10px
  border: none
  border-radius: 7px
  outline: none
  background: #FFFFFF
  &.messages__action-send
    box-shadow: 0 0 15px rgba(153, 163, 174, 0.259256)
    margin: 0 0 0 20px
</style>
