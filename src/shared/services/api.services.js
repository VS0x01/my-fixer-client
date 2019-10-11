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
      const errorMessages = error.response.data.errors;
      if (errorMessages.some(errorMessage => errorMessage.message.match("JsonWebTokenError")))
        return retryRequest(error);
      throw error;
    }
  );

  let fetchingAccessToken = false;
  let pendingRequests = [];
  const pushPendingRequest = callback => {
    pendingRequests.push(callback);
  };

  const retryRequest = error => {
    const { response: errorResponse } = error;

    const pendingRequest = new Promise((resolve, reject) => {
      pushPendingRequest(accessToken => {
        errorResponse.config.headers.Authorization = accessToken;
        if (accessToken) resolve(this.customRequest(errorResponse.config));
        else reject("JsonWebTokenError");
      });
    });

    if (!fetchingAccessToken) {
      fetchingAccessToken = !fetchingAccessToken;
      this.setAccessToken(store.getters.authTokens.refresh);
      this.get("/accounts/token")
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
            return access;
          },
          () => {
            store.dispatch("logout").then(() => {
              router.push("/");
              return false;
            });
          }
        )
        .then((token) => {
          fetchingAccessToken = !fetchingAccessToken;
          onAccessTokenFetchCompleted(token);
        })
        .finally(() => {
          pendingRequests = [];
        });
    }
    return pendingRequest;
  };

  const onAccessTokenFetchCompleted = accessToken => {
    pendingRequests.forEach(callback => callback(accessToken));
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
  this.setAccessToken(store.getters.authTokens.access || "JWT refresh");
}

export default ApiService;
