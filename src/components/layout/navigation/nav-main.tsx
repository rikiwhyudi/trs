"use client"

import Link from "next/link";
import {
  type LucideIcon,
} from "lucide-react"


import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import React from "react"

export function NavMain({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
    id?: string; 
  }[]
}) {

  return (
    <React.Fragment>
      {projects.map((item) => (
        <SidebarMenuItem key={item.id || item.name}> 
          <SidebarMenuButton asChild tooltip={item.name}>
            <Link href={item.url} className="w-full flex items-center">
              <item.icon className="h-4 w-4 group-data-[collapsible=icon]/sidebar-wrapper:mr-0" />
              <span className="group-data-[collapsible=icon]/sidebar-wrapper:hidden">
                {item.name}
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </React.Fragment>
  )
}