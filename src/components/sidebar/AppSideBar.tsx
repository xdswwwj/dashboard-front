"use client";

import { ClipboardList, Club, MapIcon, ShieldHalf } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import useUserStore from "@/store/userStore";
import { NavMain } from "@components/nav/NavMain";
import { NavUser } from "@components/nav/NavUser";

const data = {
  navMain: [
    {
      title: "클럽",
      url: "#",
      icon: Club,
    },
    {
      title: "등산",
      url: "#",
      icon: MapIcon,
      items: [
        {
          title: "기록",
          url: "#",
        },
      ],
    },
    {
      title: "랭킹",
      url: "#",
      icon: ShieldHalf,
      items: [
        {
          title: "명예의 전당",
          url: "#",
        },
        {
          title: "개인 랭킹",
          url: "#",
        },
        {
          title: "클럽 랭킹",
          url: "#",
        },
        {
          title: "기간별 랭킹",
          url: "#",
        },
      ],
    },
    {
      title: "게시판",
      url: "#",
      icon: ClipboardList,
      items: [
        {
          title: "자유게시판",
          url: "#",
        },
        {
          title: "개선사항 요청",
          url: "#",
        },
      ],
    },
  ],
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { user } = useUserStore();
  if (user === null) {
    return <></>;
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
