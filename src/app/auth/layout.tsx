import { SiteHeader } from "@/components/layout/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <SidebarProvider defaultOpen={false}>
            <SidebarInset>
              <SiteHeader showSidebarTrigger={false} />
                {children}
            </SidebarInset>
          </SidebarProvider>
  );
}
