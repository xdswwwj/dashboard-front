// AuthGuard.jsx
import useUserStore from "@/store/userStore";
import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { token } = useUserStore();
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default AuthGuard;
