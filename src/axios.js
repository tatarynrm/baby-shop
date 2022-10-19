import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://185.69.155.233:5000",
// });c
const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

export default instance;
