import { API_BASE_URL } from "@/lib/config";
import kakaoImage from "@assets/socialIcon/kakaotalkLoginButtonIcon.png";
import naverImage from "@assets/socialIcon/naverLoginButtonIcon.png";
import React from "react";
import { Button } from "../ui/button";

console.log("1API_BASE_URL >>", API_BASE_URL);
const handleKakaoLogin = () => {
  window.location.href = `${API_BASE_URL}/auth/kakao`;
};

const SocialLoginButton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Button
        variant="link"
        className="w-full"
        onClick={(e) => {
          e.preventDefault();
          handleKakaoLogin();
        }}
      >
        <img src={kakaoImage} alt="로그인 이미지" className="h-full" />
      </Button>
      <Button variant="link" className="w-full">
        <img src={naverImage} alt="로그인 이미지" className="h-full" />
      </Button>
    </div>
  );
};

export default SocialLoginButton;
