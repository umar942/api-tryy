import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: attach token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
