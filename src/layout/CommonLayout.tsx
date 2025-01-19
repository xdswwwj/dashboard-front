import CommonHeader from "@/components/header/CommonHeader";
import AppSidebar from "@/components/sidebar/AppSideBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useUserInfo } from "@/services/api";
import useUserStore from "@/store/userStore";
import React, { ReactNode, useEffect } from "react";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  const { user, setUser } = useUserStore();

  // user 정보가 없을 때만 API 요청
  const { data, isLoading, isError, error } = useUserInfo({
    enabled: !user,
  });

  // 사용자 정보가 없을 때 한 번만 설정
  useEffect(() => {
    if (!user && data) {
      setUser(data.data); // 서버에서 받아온 사용자 정보 설정
    }
  }, [user, data, setUser]);

  // 로딩 상태 처리
  if (user === null && isLoading) {
    return <div>Loading...</div>;
  }

  // 에러 상태 처리
  if (user === null && isError) {
    return <div>Error: {error?.message || "An error occurred"}</div>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <CommonHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 pt-4 border-t">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default CommonLayout;
