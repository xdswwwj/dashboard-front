"use client";

import { ClipboardList, Club } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import URL from "@/config/url";
import useUserStore from "@/store/userStore";
import { NavMain } from "@components/nav/NavMain";
import { NavUser } from "@components/nav/NavUser";

const data = {
  navMain: [
    // {
    //   title: "홈",
    //   url: URL.mainUrl,
    //   icon: House,
    // },
    {
      title: "클럽",
      icon: Club,
      url: "#",
      items: [
        {
          title: "클럽 대시보드",
          url: URL.clubUrl,
        },
        {
          title: "클럽 목록",
          url: URL.clubListUrl,
        },
      ],
    },
    // {
    //   title: "등산",
    //   url: "#",
    //   icon: MapIcon,
    //   items: [
    //     {
    //       title: "기록",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "랭킹",
    //   url: "#",
    //   icon: ShieldHalf,
    //   items: [
    //     {
    //       title: "명예의 전당",
    //       url: "#",
    //     },
    //     {
    //       title: "개인 랭킹",
    //       url: "#",
    //     },
    //     {
    //       title: "클럽 랭킹",
    //       url: "#",
    //     },
    //     {
    //       title: "기간별 랭킹",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "게시판",
      url: "#",
      icon: ClipboardList,
      items: [
        {
          title: "자유게시판",
          url: URL.freeBoard,
        },
        {
          title: "개선사항 요청",
          url: URL.developBoard,
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
