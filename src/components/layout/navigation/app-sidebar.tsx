"use client"

import * as React from "react"
import {
  Anchor,
  AudioWaveform,
  ChartColumnBig,
  FilePieChartIcon,
  LayoutGrid,
  PieChart,
  PieChartIcon,
  Ship,
  Users,
} from "lucide-react"

import { NavMainDropdown } from "@/components/layout/navigation/nav-main-dropdown"
import { NavMain } from "@/components/layout/navigation/nav-main"
import { NavUser } from "@/components/layout/navigation/nav-user"
import { TitleNav } from "@/components/layout/navigation/nav-title"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  title:
    {
      name: "Maritime Support",
      logo: Anchor,
      description: "Create reports, effortlessly.",
    },

  navMain: [
    {
      title: "Team",
      url: "#",
      icon: Users,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
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
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TitleNav title={data.title} />
      </SidebarHeader>
      <SidebarContent>
      <SidebarGroup>
      <SidebarMenu>
        <NavMain projects={data.projects} />
        {/* <NavMainDropdown items={data.navMain} /> */}
      </SidebarMenu>
      </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
