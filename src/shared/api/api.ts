import axios from "axios";
import { LocalStorage } from "~/shared/lib/storage";
import { paths } from "~/shared/constants/paths.ts";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer " + LocalStorage.get("token");
    return config;
  },
  async (error) => {
    console.error(error, "Ошибку в notifications");
  },
);

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    console.error(error, "Ошибку в notifications");

    if (error.response?.status === 401) {
      LocalStorage.remove("token");
      window.location.replace(paths.login);
    }
  },
);
