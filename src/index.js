import axios from "axios";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./assets/js/loader.js";
import Config from "./config";
import * as Constant from "./constants";
import "./index.css";
import ToastService from "./module/services/toastService";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/store.js";
import * as Util from "./util/util";

const store = configureStore();

axios.defaults.baseURL = Config.BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";


// Add a request interceptor
axios.interceptors.request.use(
  async (request) => {
    //  do something before request is sent
    window.showLoader(true);
    return request;
  },
  (error) => {
    window.showLoader(false);
    // do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    window.showLoader(false);
    //  Any status code that lie with in range of 2xx cause this funstion to tirgger
    // Do something with response data
    return response;
  },
  (error) => {
    window.showLoader(false);
    //  Any status code that falls outside the range of 2xx cause this funstion to tirgger
    // Do something with response error
    if (!navigator.onLine) {
      ToastService.error("Check your internet connection!");
    }
    let err = error && error.response ? error.response.data : null;
    if (err && err.message) {
      ToastService.error(err.message);
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
