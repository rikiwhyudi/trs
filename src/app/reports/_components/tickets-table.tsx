"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { DataTablePagination } from "./data-table-pagination"; // Pastikan path ini benar
import React from "react";

// --- Import Komponen untuk Filter Status ---
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"; // Pastikan Button diimpor
import { ChevronDownIcon } from "lucide-react"; // Atau ikon lain dari lucide-react, misalnya 'Filter'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // Tambahkan prop opsional untuk daftar status yang tersedia
  // Ini akan membuat filter lebih fleksibel
  availableStatuses?: string[];
}

export function TicketsTable<TData, TValue>({
  columns,
  data,
  availableStatuses = ["Pending", "Active", "Resolved", "Closed"], // Default statuses
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
    },
    // --- PERUBAHAN DI SINI: Atur Ukuran Halaman Awal ---
    initialState: {
      pagination: {
        pageSize: 5, // Mengatur 7 baris per halaman
      },
    },
  });

  // Fungsi untuk mengatur filter status
  const setStatusFilter = (status: string | null) => {
    table.getColumn("status")?.setFilterValue(status);
  };

  return (
    <div className="flex flex-col border px-4 pb-3 bg-card text-card-foreground rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center py-4">
        {/* --- Input Filter Email --- */}
        <Input
          placeholder="Search No. Ticket..."
          value={(table.getColumn("no_ticket")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("no_ticket")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-[250px]"
        />

        {/* --- PERUBAHAN DI SINI: Tombol Filter Berdasarkan Status --- */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filter Status <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter berdasarkan status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Opsi untuk menghapus filter status */}
            <DropdownMenuItem onClick={() => setStatusFilter(null)}>
              Semua Status
            </DropdownMenuItem>
            {/* Looping untuk setiap status yang tersedia */}
            {availableStatuses.map((status) => (
              <DropdownMenuItem key={status} onClick={() => setStatusFilter(status)}>
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* --- AKHIR PERUBAHAN Filter Status --- */}
      </div>

      <div className="rounded-md border mb-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getPaginationRowModel().rows?.length ? (
              table.getPaginationRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table}  />
    </div>
  );
}