export const DEV_BASE_URL = "http://localhost:5173";
export const PROD_BASE_URL = "https://sanirang.kr";
export const DEV_API_URL = "http://localhost:3000";
export const PROD_API_URL = "https://api.sanirang.kr";

export const VITE_ENV = import.meta.env;
export const MODE = VITE_ENV.MODE;

export const BASE_URL = MODE === "development" ? DEV_BASE_URL : PROD_BASE_URL;
export const API_BASE_URL = MODE === "development" ? DEV_API_URL : PROD_API_URL;
