// --------- Axios Interceptor---------//

import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// const API_BASE_URL =
//   import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/users"; // Fallback if env is missing

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
