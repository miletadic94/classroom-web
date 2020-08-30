import axios from "axios";
import { getUserToken } from "../services/localStorageService";

export const BASE_URL = "http://localhost:8080";

const token = getUserToken();
axios.defaults.headers.common["Authorization"] = token;

export default axios;
