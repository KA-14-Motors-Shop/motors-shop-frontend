import axios from "axios";

export const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const apiDeploy = axios.create({
  baseURL: "https://motors-shop.herokuapp.com/",
});

export const apiLocal = axios.create({
  baseURL: "http://localhost:3001/",
});
