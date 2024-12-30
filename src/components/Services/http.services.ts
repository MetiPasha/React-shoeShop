import axios from "axios";
import { BASE_URL, TIMEOUT } from "../Config/api.config";

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export const Http = {
  Get: http.get,
  Post: http.post,
  Delete: http.delete,
  Put: http.put,
};

export const httpPrivate = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  withCredentials: true,
});

export const HttpPrivate = {
  get: httpPrivate.get,
  post: httpPrivate.post,
  delete: httpPrivate.delete,
  put: httpPrivate.put,
};
