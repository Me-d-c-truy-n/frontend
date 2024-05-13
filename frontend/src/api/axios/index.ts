import axios from "axios";

const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
})

export default AxiosClient;