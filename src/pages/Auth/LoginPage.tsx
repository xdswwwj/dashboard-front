import LoginContainer from "@/containers/auth/LoginContainer";
import AuthLayout from "@/layout/AuthLayout";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
};

export default LoginPage;
