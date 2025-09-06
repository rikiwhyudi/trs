import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/layout/site-header";
import { AppSidebar } from "@/components/layout/navigation/app-sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
  withSidebar?: boolean;
}

export function AppLayout({ children, withSidebar = false }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      {withSidebar && <AppSidebar />}
      <SidebarInset>
        <SiteHeader showSidebarTrigger={withSidebar} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
