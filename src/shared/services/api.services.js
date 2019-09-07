import axios from "axios";
import auth from "@/auth/auth";

function ApiService(baseURL) {
  this.init = baseURL => {
    axios.defaults.baseURL = baseURL;
  };

  this.refreshTokens = () => {
    this.setHeaders({
      Authorization: localStorage.getItem("refreshToken")
    });
    return this.get("/accounts/token");
  };

  this.setHeaders = (...headers) => {
    if (headers.length) {
      headers.forEach(header => {
        Object.keys(header).forEach(key => {
          axios.defaults.headers.common[key] = header[key];
        });
      });
    } else axios.defaults.headers.common = {};
  };

  this.get = resource => {
    return this.customRequest({
      method: "GET",
      url: resource
    });
  };

  this.post = (resource, data) => {
    return this.customRequest({
      method: "POST",
      url: resource,
      data
    });
  };

  this.put = (resource, data) => {
    return this.customRequest({
      method: "PUT",
      url: resource,
      data
    });
  };

  this.delete = resource => {
    return this.customRequest({
      method: "DELETE",
      url: resource
    });
  };

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  this.customRequest = data => {
    return axios(data).catch(reason => {
      switch (reason.response.status) {
        case 401:
          this.refreshTokens().then(response => {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
          }, () => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
          });
          break;
        default:
          throw reason;
      }
    });
  };

  if (baseURL) this.init(baseURL);
}

export default ApiService;
