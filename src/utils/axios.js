import axios from "axios";
import { getUserToken } from "../services/localStorageService";

export const BASE_URL = "http://localhost:8090/api";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const token = getUserToken();
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axios;
