import url from "@/config/url";
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
      navigate(url.clubUrl);
      // navigate(url.mainUrl);
      return;
    }

    if (token) {
      setToken(token);

      // 메인 페이지로 리다이렉트
      navigate(url.clubUrl);
      // navigate(url.mainUrl);
    }
  }, [navigate]);

  return <></>;
};

export default SocialLoginSuccessRedirect;
