// import axiosInstance from "./axiosInstance";
import axiosInstance from "../api/axiosInstance";


export const loginAPI = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const signupAPI = async (data) => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response.data;
};
