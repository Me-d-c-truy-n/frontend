import axios from "axios";
import { setupInterceptors } from "./interceptors";

const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

setupInterceptors(AxiosClient);

export default AxiosClient;