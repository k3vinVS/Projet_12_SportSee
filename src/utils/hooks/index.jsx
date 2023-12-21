import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:3000/user",
});

export const getUserData = (id, endpoint) => baseURL.get(`/${id}/${endpoint}`);


