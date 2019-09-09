import axios from "axios";
import router from "@/router";
import store from "@/store";

function ApiService(baseURL) {
  this.init = baseURL => {
    axios.defaults.baseURL = baseURL;
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

  this.setAccessToken = token => {
    this.setHeaders({
      Authorization: token
    });
  };

  /**
   * Refresh tokens when expired.
   **/
  axios.interceptors.response.use(
    response => response,
    error => {
      const tokenErrors = ["jwt expired", "invalid token", "token not found"];
      const errorMessages = error.response.data.errors;
      if (
        errorMessages.filter(errorMessage =>
          tokenErrors.includes(errorMessage)
        ) &&
        !Object.keys(error.response.config.params).includes("refreshTokens")
      ) {
        return retryRequest(error);
      }
      throw error;
    }
  );

  const refreshTokens = () => {
    this.setAccessToken(store.getters.authTokens.refresh);
    return this.get("/accounts/token", {
      refreshTokens: true
    });
  };

  let fetchingAccessToken = false;
  let pendingRequests = [];
  const pushPendingRequest = callback => {
    pendingRequests.push(callback);
  };

  const retryRequest = async error => {
    const { response: errorResponse } = error;
    const refreshToken = store.getters.authTokens.refresh;
    if (!refreshToken) {
      throw error;
    }

    pushPendingRequest(accessToken => {
      errorResponse.config.headers.Authorization = accessToken;
      this.customRequest(errorResponse.config);
    });

    if (!fetchingAccessToken) {
      fetchingAccessToken = !fetchingAccessToken;
      refreshTokens()
        .then(
          response => {
            const {
              accessToken: access,
              refreshToken: refresh
            } = response.data;
            store.dispatch("login", {
              tokens: {
                access,
                refresh
              }
            });
          },
          () => {
            store.dispatch("logout");
            router.push("/");
            return false;
          }
        )
        .then(res => {
          fetchingAccessToken = !fetchingAccessToken;
          onAccessTokenFetchCompleted(res);
        })
        .finally(() => {
          pendingRequests = [];
        });
    }
    return false;
  };

  const onAccessTokenFetchCompleted = accessToken => {
    if (accessToken) pendingRequests.forEach(callback => callback(accessToken));
  };

  this.get = (resource, params) => {
    return this.customRequest({
      method: "GET",
      url: resource,
      params
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

  this.delete = (resource, params) => {
    return this.customRequest({
      method: "DELETE",
      url: resource,
      params
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
    return axios(data);
  };

  if (baseURL) this.init(baseURL);
}

export default ApiService;
