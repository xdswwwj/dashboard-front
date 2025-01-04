// AuthGuard.jsx
import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // 간단한 인증 로직 예시
  console.log("trest");
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default AuthGuard;
