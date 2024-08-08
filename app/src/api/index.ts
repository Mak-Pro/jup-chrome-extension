import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;

export const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "ngrok-skip-browser-warning": true,
};

export const userAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: headers,
});
