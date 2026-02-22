import axios from "axios";

export const AuthAPI = axios.create({
  baseURL: "http://localhost/cms",
  headers: {
    "Content-Type": "application/json",
  },
});
