import { AppLayout } from "@/components/layout/app-layout";
import React from "react";

export default function MainAppPageLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout withSidebar={true}>{children}</AppLayout>;
}
