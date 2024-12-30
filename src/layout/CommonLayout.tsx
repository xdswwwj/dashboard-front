import CommonHeader from "@/components/header/CommonHeader";
import { AppSidebar } from "@/components/sidebar/AppSideBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <CommonHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
        <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
          This is a fixed footer.
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default CommonLayout;
