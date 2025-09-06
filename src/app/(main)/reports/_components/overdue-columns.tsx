"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTicket } from "../_lib/dummy-data-table";

// --- Fungsi Pembantu untuk Memotong Teks dan Menambahkan Elipsis ---
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

export const overdueColumns: ColumnDef<DataTicket>[] = [
  {
    accessorKey: "no_ticket",
    header: "No. Ticket",
    cell: ({ cell }) => <div>{cell.getValue<string>()}</div>, // Pastikan cell membaca string
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ cell }) => {
      const title = cell.getValue<string>();
      return <div>{truncateText(title, 15)}</div>; // <--- Terapkan pemotongan teks
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    // Anda memiliki logika Badge yang lebih kompleks di dashboard-ticket-table.tsx
    // Biasanya ini diintegrasikan ke sini.
    // Jika Anda ingin status dengan badge, Anda perlu mengimpor Badge dan logic dari sana.
    cell: ({ cell }) => <div>{cell.getValue<string>()}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original; // `payment` di sini sebenarnya adalah `Ticket`

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id || '')} // Pastikan payment.id tidak null
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];