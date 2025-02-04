import API_URL from "@/config/api.url";
import { HttpMethodEnum, useAuthCheckQuery } from "../common";

export const useKakaoLogin = () => {
  return useAuthCheckQuery({
    apiUrl: `/auth/kakao`,
    queryKey: ["kakaoLogin"],
    method: HttpMethodEnum.GET,
  });
};

export const useUserInfo = (options = {}) => {
  return useAuthCheckQuery({
    apiUrl: API_URL.GET_USER_INFO,
    queryKey: ["userInfo"],
    method: HttpMethodEnum.POST,
    options: options,
  });
};
