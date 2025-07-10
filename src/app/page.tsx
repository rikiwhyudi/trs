// app/page.tsx
"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Impor ikon yang relevan untuk highlight fungsionalitas
import { FileText, BarChart, TrendingUp, LogIn, UserPlus } from "lucide-react";


export default function HomePage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <SidebarInset className="flex flex-col flex-1 p-0 sm:p-0 lg:p-0 data-[collapsible=true]:p-0 min-h-screen">
        <SiteHeader showSidebarTrigger={false} />

        <main className="flex flex-1 flex-col items-center justify-center p-6 text-center bg-background">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl leading-tight">
            Selamat Datang di <span className="text-primary">Maritime Support</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
           Portal terpusat intuitif untuk <strong>**membuat laporan tiket, melakukan analisis mendalam, dan memantau performa team.** </strong>
            Easy to use, powerful insights, and seamless performance monitoring.
          </p>
          
          {/* Section untuk Card Highlight Fungsionalitas */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
            <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[180px]">
              <CardHeader className="flex justify-center p-0 mb-4 h-12 w-full">
                <div className="flex items-center justify-center h-full w-full"> 
                  <FileText className="h-10 w-10 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-lg font-semibold mb-2">Buat Laporan Tiket</CardTitle>
                <p className="text-sm text-muted-foreground">Catat dan kelola setiap insiden atau permintaan dengan detail.</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[180px]">
              <CardHeader className="flex justify-center p-0 mb-4 h-12 w-full">
                <div className="flex items-center justify-center h-full w-full">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-lg font-semibold mb-2">Analisis Mendalam</CardTitle>
                <p className="text-sm text-muted-foreground">Dapatkan *insight* dari data tiket untuk identifikasi tren dan masalah berulang.</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[180px]">
              <CardHeader className="flex justify-center p-0 mb-4 h-12 w-full">
                <div className="flex items-center justify-center h-full w-full">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-lg font-semibold mb-2">Monitoring Performa</CardTitle>
                <p className="text-sm text-muted-foreground">Pantau waktu respon, waktu resolusi, dan efisiensi tim.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/auth/login" passHref>
              <Button size="lg" className="px-6 py-3 text-base flex items-center gap-2">
                <LogIn className="h-5 w-5" /> Masuk
              </Button>
            </Link>
            <Link href="/auth/register" passHref>
              <Button size="lg" variant="outline" className="px-6 py-3 text-base flex items-center gap-2">
                <UserPlus className="h-5 w-5" /> Daftar
              </Button>
            </Link>
          </div>
        </main>

        <footer className="py-6 bg-primary-foreground/10 text-muted-foreground text-center flex-shrink-0">
          <p className="text-xs">&copy; {new Date().getFullYear()} Ticket Reporting System. All rights reserved.</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}