import { AppLayout } from "@/components/layout/app-layout";
import React from "react";

export default function PublicPageLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout withSidebar={false}>{children}</AppLayout>;
}
