import RegisterContainer from "@/containers/auth/RegisterContainer";
import AuthLayout from "@/layout/AuthLayout";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterContainer />
    </AuthLayout>
  );
};

export default RegisterPage;
