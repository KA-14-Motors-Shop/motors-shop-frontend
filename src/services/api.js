import axios from "axios";

export const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const apiDeploy = axios.create({
  baseURL: "https://motors-shop-production.up.railway.app/",
});
