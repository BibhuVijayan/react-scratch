import axios from "axios";
import { onResponse, onResponseError } from "./responseInterceptor";
import { onRequest, onRequestError } from "./requestInterceptor";

// export const BASE_URL = "https://api.finishfactory.in";
export const BASE_URL = "https://bibhuvijayan.github.io/react-scratch";

export const API = axios.create({
  baseURL: BASE_URL
});

API.interceptors.request.use(config => onRequest(config), onRequestError);
API.interceptors.response.use(onResponse, onResponseError);
