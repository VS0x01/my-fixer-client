export default {
  loggedIn() {
    return !!localStorage.getItem("accessToken") && !!localStorage.getItem("refreshToken");
  },

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
};
