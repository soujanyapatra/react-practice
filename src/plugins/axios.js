import axios from "axios";
axios.defaults.baseURL = 'https://';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => {
    // Modify the response data here
    return response;
  },
  error => {
    // Handle errors in the response interceptor
    return Promise.reject(error);
  }
);

export default axios
