import useUserStore from "@/store/userStore";

export const logout = () => {
  const { clearUser } = useUserStore.getState(); // Zustand에서 clearUser 호출
  clearUser(); // 사용자 정보 초기화
  localStorage.removeItem("accessToken"); // 로컬스토리지에서 토큰 제거
  window.location.replace("/login"); // 로그인 페이지로 리다이렉트
};
