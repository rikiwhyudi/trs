'use client';

import * as React from "react";
import ExcelUploadCard from "./_components/file-upload";
import { overdueColumns } from "./_components/overdue-columns";
import { OverdueTable } from "./_components/overdue-table";
import { tiketsColumns } from "./_components/tickets-columns";
import { TicketsTable } from "./_components/tickets-table";
import { dataTicket } from "./_lib/dummy-data-table";

export default function ReportsPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex-1 p-4 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-0">
        <ExcelUploadCard />
        <OverdueTable
          columns={overdueColumns}
          data={dataTicket}
          title="Daftar Tiket Overdue"
          isLoading={isLoading}
        />
      </div>
      <div className="mt-4 mb-0">
        <TicketsTable 
          columns={tiketsColumns} 
          data={dataTicket} 
          isLoading={isLoading} 
        />
      </div>
    </main>
  );
}