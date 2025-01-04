import {
  KakaotalkLoginButtonIcon,
  NaverLoginButtonIcon,
} from "@/assets/socialIcon";
import React from "react";
import { Button } from "../ui/button";

const SocialLoginButton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Button variant="link" className="w-full">
        <KakaotalkLoginButtonIcon />
      </Button>
      <Button variant="link" className="w-full">
        <NaverLoginButtonIcon />
      </Button>
    </div>
  );
};

export default SocialLoginButton;
