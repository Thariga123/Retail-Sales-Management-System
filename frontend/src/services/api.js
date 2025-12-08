import axios from "axios";

const API = axios.create({
  baseURL: "https://retail-sales-management-system-6q45.onrender.com/api", // backend URL
});

export default API;
