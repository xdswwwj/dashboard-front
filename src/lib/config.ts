export const VITE_ENV = import.meta.env;
console.log("VITE_ENV >>", VITE_ENV);
export const MODE = VITE_ENV.MODE;
export const BASE_URL =
  MODE === "development"
    ? VITE_ENV.VITE_DEV_BASE_URL
    : VITE_ENV.VITE_PROD_BASE_URL;
export const API_BASE_URL =
  MODE === "development"
    ? VITE_ENV.VITE_DEV_API_URL
    : VITE_ENV.VITE_PROD_API_URL;
