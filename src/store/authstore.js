// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: null,
//   token: null,
//   isAuth: false,
//   setAuth: ({ user, token }) =>
//     set(() => {
//       localStorage.setItem("auth-token", token);
//       return { user, token, isAuth: true };
//     }),
//   logout: () =>
//     set(() => {
//       localStorage.removeItem("auth-token");
//       return { user: null, token: null, isAuth: false };
//     }),
// }));

// export default useAuthStore;
import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../api/authAPI";
import useAuthStore from "../store/authstore";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      setAuth({ user: data.user, token: data.token });
    },
  });
};
