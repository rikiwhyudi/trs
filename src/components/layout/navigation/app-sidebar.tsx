'use client';

import * as React from "react";
import {
  Anchor,
  LayoutGrid,
  PieChartIcon,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/layout/navigation/nav-main";
import { NavUser } from "@/components/layout/navigation/nav-user";
import { TitleNav } from "@/components/layout/navigation/nav-title";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/auth";

// This is sample data.
const data = {
  title: {
    name: "Maritime Support",
    logo: Anchor,
    description: "Create reports, effortlessly.",
  },
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutGrid,
    },
    {
      name: "Reports",
      url: "/reports",
      icon: PieChartIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isLoggedIn, user } = useAuthStore();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TitleNav title={data.title} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <NavMain projects={data.projects} />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {isLoggedIn && user && <NavUser user={user} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}