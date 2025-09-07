'use client';

import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ta } from "date-fns/locale";

export function TableSkeleton({ columnCount = 5 }: { columnCount?: number }) {
  return (
    <div className="flex flex-col border px-4 pb-3 bg-card text-card-foreground rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between py-4">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[140px]" />
      </div>
      <div className="rounded-md border mb-3">
        <Table>
          <TableHeader>
            <TableRow>
              {Array.from({ length: columnCount }).map((_, i) => (
                <TableHead key={i}>
                  <Skeleton className="h-5 w-full" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {Array.from({ length: columnCount }).map((_, cellIndex) => (
                  <TableCell key={cellIndex}>
                    <Skeleton className="h-5 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}
