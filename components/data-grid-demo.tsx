"use client"
import { ArrowUpDown } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { DataGrid } from "@/components/ui/data-grid"
import { Badge } from "@/components/ui/badge"

// Example data type
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

// Example data
const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m.smith@example.gov",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "j.doe@example.gov",
  },
  {
    id: "12a3bc45",
    amount: 250,
    status: "success",
    email: "a.johnson@example.gov",
  },
  {
    id: "43de23a1",
    amount: 150,
    status: "failed",
    email: "s.williams@example.gov",
  },
  {
    id: "5e6f789a",
    amount: 175,
    status: "success",
    email: "r.brown@example.gov",
  },
]

// Status badge mapping
const statusVariantMap = {
  pending: "warning",
  processing: "info",
  success: "success",
  failed: "destructive",
} as const

export function DataGridDemo() {
  // Define columns
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "Reference ID",
      cell: ({ row }) => <div className="font-mono">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as keyof typeof statusVariantMap
        return <Badge variant={statusVariantMap[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
      },
    },
    {
      accessorKey: "email",
      header: "Email",
    },
  ]

  return <DataGrid columns={columns} data={data} />
}
