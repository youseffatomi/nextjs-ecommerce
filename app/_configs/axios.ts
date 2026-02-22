import axios from "axios";

export const AuthAPI = axios.create({
  baseURL: "http://localhost/wp/wp-json/jwt-auth/v1/token",
  headers: {
    "Content-Type": "application/json",
  },
});
