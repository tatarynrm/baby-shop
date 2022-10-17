import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.comfort4baby.store",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
