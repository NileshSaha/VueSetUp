import axios from "axios";

const baseURL = "http://scoolio-backend-dev.track-progress.com/api/"; // Base url


const service = axios.create({
  baseURL, // api base_url
  timeout: 60000 // request timeout
});
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (localStorage.getItem("token")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }
    config.headers["Accept"] = 'application/json';
    config.headers["version"] = "0.1";
    config.headers["build"] = "0.1";
    config.headers["client-type"] = "WEB";
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    // const environment = response.headers["x-server"] || "production"

    // no need to repeatedly set this with every api request. doing it the first time is enough.
    // if (!store.getters.environment) {
    //   store.commit('SET_ENVIRONMENT', environment)
    // }
    return response;
  },
  error => {
    let message = ""

    // authentication handling
    // if (error.response && error.response.status === 401) {
    //   store.dispatch("LocalLogout").then(() => {
    //     location.reload();
    //   });
    // }

    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    console.log(message)

    // Message({
    //   message: message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error.response);
  }
)

export default service
