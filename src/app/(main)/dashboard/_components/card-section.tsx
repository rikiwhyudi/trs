import * as React from "react";
import { Ticket, CheckCircle2, XCircle, Clock3, OctagonAlert, CircleAlert } from "lucide-react";

interface DashboardSummaryCardsProps {
  totalTickets: number;
  resolvedTickets: number;
  closedTickets: number;
  activeTickets: number;
  pendingTickets: number;
}

export function DashboardSummaryCards({
  totalTickets,
  resolvedTickets,
  closedTickets,
  activeTickets,
  pendingTickets,
}: DashboardSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      <div className="bg-card text-card-foreground rounded-xl p-4 border shadow-sm min-h-[100px] flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between space-y-0">
          <p className="text-sm font-medium">Total Tiket</p>
          <Ticket className="h-5 w-5 text-muted-foreground" />
        </div>
        <div> 
          <div className="text-md font-bold leading-none">{totalTickets}</div>
          <p className="text-xs text-muted-foreground mt-2">Jumlah keseluruhan tiket</p>
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-xl p-4 border shadow-sm min-h-[100px] flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between space-y-0">
          <p className="text-sm font-medium">Tiket Aktif</p>
          <CircleAlert className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <div className="text-md font-bold leading-none">{activeTickets}</div>
          <p className="text-xs text-muted-foreground mt-2">Tiket yang sedang diproses</p>
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-xl p-4 border shadow-sm min-h-[100px] flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between space-y-0">
          <p className="text-sm font-medium">Tiket Pending</p>
          <Clock3 className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <div className="text-md font-bold leading-none">{pendingTickets}</div>
          <p className="text-xs text-muted-foreground mt-2">Tiket yang dalam koordinasi</p>
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-xl p-4 border shadow-sm min-h-[100px] flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between space-y-0">
          <p className="text-sm font-medium">Tiket Resolved</p>
          <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <div className="text-md font-bold leading-none">{resolvedTickets}</div>
          <p className="text-xs text-muted-foreground mt-2">Tiket yang sudah diselesaikan</p>
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-xl p-4 border shadow-sm min-h-[100px] flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between space-y-0">
          <p className="text-sm font-medium">Tiket Ditutup</p>
          <XCircle className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <div className="text-md font-bold leading-none">{closedTickets}</div>
          <p className="text-xs text-muted-foreground mt-2">Tiket yang sudah ditutup</p>
        </div>
      </div>
    </div>
  );
}