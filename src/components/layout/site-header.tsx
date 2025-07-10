// components/layout/site-header.tsx
"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Anchor } from "lucide-react";

interface SiteHeaderProps {
  showSidebarTrigger?: boolean;
}

// Fungsi helper untuk memformat pathname 
const formatPathnameForBreadcrumb = (pathname: string) => {

  const segments = pathname.startsWith('/') ? pathname.substring(1).split('/') : pathname.split('/');
  const lastSegment = segments[segments.length - 1];

  return lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export function SiteHeader({ showSidebarTrigger = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const formattedPath = formatPathnameForBreadcrumb(pathname);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        {showSidebarTrigger ? (
          <React.Fragment>
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage>{formattedPath}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SidebarMenuButton size="lg">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Anchor className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Maritime Support</span>
                <span className="truncate text-xs">Create reports, effortlessly.</span>
              </div>
            </SidebarMenuButton>
          </React.Fragment>
        )}
      </div>

      <div className="ml-auto flex items-center px-4 gap-2">
        <ModeToggle />
      </div>
    </header>
  );
}