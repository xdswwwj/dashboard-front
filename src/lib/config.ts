export const VITE_DEV_BASE_URL = "http://localhost:5173";
export const VITE_PROD_BASE_URL = "https://sanirang.kr";
export const VITE_DEV_API_URL = "http://localhost:3000";
export const VITE_PROD_API_URL = "https://api.sanirang.kr";

export const VITE_ENV = import.meta.env;
export const MODE = VITE_ENV.MODE;
export const BASE_URL =
  MODE === "development" ? VITE_DEV_BASE_URL : VITE_PROD_BASE_URL;
export const API_BASE_URL =
  MODE === "development" ? VITE_DEV_API_URL : VITE_PROD_API_URL;
