import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    account: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    },
    tokens: {
      access: localStorage.getItem("accessToken") || "",
      refresh: localStorage.getItem("refreshToken") || ""
    },
    errors: []
  },
  getters: {
    accountInfo: state => {
      return state.account;
    },
    authTokens: state => {
      return state.tokens;
    },
    loggedIn: state => {
      return Object.keys(state.tokens).filter(key => !!state.tokens[key])
        .length;
    }
  },
  mutations: {
    updateAccountInfo(state, payload) {
      state.account = Object.assign(payload);
    },
    setTokens(state, payload) {
      state.tokens = Object.assign(payload);
    },
    pushErrors(state, payload) {
      state.errors = [...payload];
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("updateAccountInfo", payload.account);
      commit("setTokens", payload.tokens);
      commit("pushErrors", []);
      localStorage.setItem("accessToken", payload.tokens.access);
      localStorage.setItem("refreshToken", payload.tokens.refresh);
    },
    logout({ commit }) {
      commit("setTokens", {});
      commit("updateAccountInfo", {});
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
    /*manageAccountInfo({ commit, state }) {
      this.$http.setHeader(localStorage.getItem("accessToken"));
      this.$http.get();
      commit("updateAccountInfo", payload);
    }*/
  }
});

export default store;
