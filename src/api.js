import axios from "axios"

export const baseURL = 'http://localhost:8000/api/v1/'
export const hostURl = 'http://localhost:8000'

export const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  timeout: 5000,
})

api.interceptors.request.use(function (config) {
  if (localStorage.getItem('x-access-token') && localStorage.getItem('x-refresh-token')) {
    config.headers['x-access-token'] = localStorage.getItem('x-access-token')
    config.headers['x-refresh-token'] = localStorage.getItem('x-refresh-token')
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  if (response.headers?.get("x-access-token")) {
    localStorage.setItem('x-access-token', response.headers.get("x-access-token"))
    document.cookie = `x-access-token=${response.headers.get("x-access-token")};`
  }
  if (response.headers?.get("x-refresh-token")) {
    localStorage.setItem('x-refresh-token', response.headers.get("x-refresh-token"))
    document.cookie = `x-refresh-token=${response.headers.get("x-refresh-token")};`
  }
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});