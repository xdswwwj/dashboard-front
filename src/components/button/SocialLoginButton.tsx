import {
  KakaotalkLoginButtonIcon,
  NaverLoginButtonIcon,
} from "@/assets/socialIcon";
import React from "react";
import { Button } from "../ui/button";

const handleKakaoLogin = () => {
  window.location.href = "http://localhost:3000/auth/kakao";
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
