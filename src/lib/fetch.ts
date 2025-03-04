import { API_BASE_URL } from "./config";

export const authFetcher = async (
  endpoint: string,
  options: RequestInit = {},
  token: string
): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token || ""}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("errorData >>", errorData);
      console.log("response >>", response);
      throw new Error(errorData.message || "API 요청 실패");
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
