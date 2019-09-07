import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    account: {},
    errors: []
  },
  getters: {
    accountInfo: state => {
      //if(!state.account.keys.length) this.dispatch("manageAccountInfo");
      return state.account;
    }
  },
  mutations: {
    pushErrors(state, payload) {
      state.errors = [...payload];
    },
    updateAccountInfo(state, payload) {
      state.account = Object.assign(payload);
    }
  },
  /*actions: {
    manageAccountInfo({ commit, state }) {
      this.$http.setHeader(localStorage.getItem("accessToken"));
      this.$http.get();
      //commit("updateAccountInfo", payload);
    }
  }*/
});

export default store;
