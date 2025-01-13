import { URL } from "@/config/url";
import { JwtTokenPayload } from "@/services/api";
import { jwtDecode } from "jwt-decode";

const BASE_URL = "http://localhost:3000";

export const fetcher = async (
  endpoint: string,
  options: RequestInit = {},
  token?: string | null
): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token || ""}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API 요청 실패");
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const authFetcher = async (
  endpoint: string,
  options: RequestInit = {},
  token: string
): Promise<any> => {
  try {
    console.log("token >>", token);

    const decoded: JwtTokenPayload = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    if (decoded.exp && decoded.exp < currentTime) {
      window.location.replace(URL.loginUrl);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token || ""}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API 요청 실패");
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
