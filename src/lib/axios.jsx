import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7160/api",
});

export default api;