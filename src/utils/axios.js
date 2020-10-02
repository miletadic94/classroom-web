import axios from "axios";
import { getUserToken, getRoleId } from "../services/localStorageService";

export const BASE_URL = "http://192.168.0.26:8090/api";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const token = getUserToken();
if (token) {
  console.log("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const userId = getRoleId();
if (userId) {
  console.log("userId", userId);
  axios.defaults.headers.common["userId"] = userId;
}

export default axios;
