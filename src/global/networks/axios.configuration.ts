import axios from "axios";

export const configureAxios = () => {
  axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
  axios.interceptors.request.use(
    (config) => {
      const auth = localStorage.getItem("auth");
      const token = JSON.parse(auth || "{}").token;
      if (token) config.headers.Authorization = `${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
