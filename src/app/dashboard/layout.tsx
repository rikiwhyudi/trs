import { AppSidebar } from "@/components/layout/navigation/app-sidebar";
import { SiteHeader } from "@/components/layout/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { registerChartBase } from "@/lib/chart-register";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <SidebarInset>
              <SiteHeader showSidebarTrigger={true} />
                {children}
            </SidebarInset>
          </SidebarProvider>
          
  );
}