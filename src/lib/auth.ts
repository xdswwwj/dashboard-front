import URL from "@/config/url";
import { JwtTokenPayload } from "@/services/api";
import useUserStore from "@/store/userStore";
import { jwtDecode } from "jwt-decode";

export const logout = () => {
  const { clearUser } = useUserStore.getState(); // Zustand에서 clearUser 호출
  clearUser(); // 사용자 정보 초기화
  localStorage.removeItem("accessToken"); // 로컬스토리지에서 토큰 제거
  window.location.replace(URL.loginUrl); // 로그인 페이지로 리다이렉트
};

export const checkExpToken = (token: string): boolean => {
  const decoded: JwtTokenPayload = jwtDecode(token); // 토큰 디코딩
  const currentTime = Math.floor(Date.now() / 1000); // 현재 시간

  if (decoded.exp && decoded.exp < currentTime) {
    return false;
  }

  return true;
};

export const getUserIndex = (token: string): number => {
  const decoded: JwtTokenPayload = jwtDecode(token);
  return Number(decoded.id);
};
