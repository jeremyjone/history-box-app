import Vue from "vue";
import axios from "axios";
import { Toast } from "../utils";

axios.defaults.timeout = 50000;
// axios.defaults.baseURL = ''

// http request interceptor
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify({
      ...config.data
    });

    config.headers["Content-Type"] =
      "application/json;application/x-www-form-urlencoded;charset=UTF-8";

    // 添加用户信息到请求头
    config.headers["Username"] = window.localStorage["username"];
    config.headers["UserId"] = window.sessionStorage["user_id"];

    config.headers.Authorization = "Bearer " + window.sessionStorage.token;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// The response interceptor is exception handling
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.response.message = "错误请求  400";
          break;
        case 401:
          err.response.message = "未授权，请重新登录  401";
          break;
        case 403:
          err.response.message = "拒绝访问  403";
          break;
        case 404:
          err.response.message = "请求错误,未找到该资源  404";
          break;
        case 405:
          err.response.message = "请求方法未允许  405";
          break;
        case 408:
          err.response.message = "请求超时  408";
          break;
        case 500:
          err.response.message = "服务器端出错  500";
          break;
        case 501:
          err.response.message = "网络未实现  501";
          break;
        case 502:
          err.response.message = "网络错误  502";
          break;
        case 503:
          err.response.message = "服务不可用  503";
          break;
        case 504:
          err.response.message = "网络超时  504";
          break;
        case 505:
          err.response.message = "http版本不支持该请求  505";
          break;
        default:
          err.response.message = `other连接错误${err.response.status}`;
      }
    } else {
      err.response = {message: "Can not connect Server!"};
    }

    Toast(err.response.message, "error");
    return Promise.reject(err.response);
  }
);

/**
 * Encapsulate GET methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * Encapsulate POST methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

Vue.prototype.$get = get;
Vue.prototype.$post = post;
