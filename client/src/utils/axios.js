import axios from "axios";
import { geUserFromLocalStorage } from "./localStorage";

// const productionUrl = "https://jobify-prod.herokuapp.com/api/v1/toolkit";
const productionUrl = "/api/v1";

const customFetch = axios.create({
  baseURL: productionUrl,
});

customFetch.interceptors.request.use((config) => {
  const user = geUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export { customFetch };
