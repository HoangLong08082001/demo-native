import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});
instance.defaults.withCredentials = true;
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`; //Bearer la noi luu tru token trong localstorage.
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = (error && error.response && error.response.status) || 500;
    switch (status) {
      case 401: {
        toast.warning("Unauthorized the user");
        return true;
      }
      case 403: {
        toast.error("You dont have permission to access");
        return true;
      }
      case 400: {
        return Promise.reject(error);
      }
      case 404: {
        return Promise.reject(error);
      }
      case 409: {
        return Promise.reject(error);
      }
      case 422: {
        return Promise.reject(error);
      }
      default: {
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
