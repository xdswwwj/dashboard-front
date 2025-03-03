import useUserStore from "@/store/userStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SocialLoginSuccessRedirect: React.FC = () => {
  const navigate = useNavigate();
  const { setToken, token: storeToken } = useUserStore();

  useEffect(() => {
    // URL에서 token 추출
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (storeToken) {
      navigate("/");
      return;
    }

    if (token) {
      setToken(token);

      // 메인 페이지로 리다이렉트
      navigate("/");
    }
  }, [navigate]);

  return <></>;
};

export default SocialLoginSuccessRedirect;
