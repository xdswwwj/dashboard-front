import { API_BASE_URL } from "@/lib/config";
import {
  KakaotalkLoginButtonIcon,
  NaverLoginButtonIcon,
} from "@assets/socialIcon";
import React from "react";
import { Button } from "../ui/button";

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
        <KakaotalkLoginButtonIcon />
      </Button>
      <Button variant="link" className="w-full">
        <NaverLoginButtonIcon />
      </Button>
    </div>
  );
};

export default SocialLoginButton;
