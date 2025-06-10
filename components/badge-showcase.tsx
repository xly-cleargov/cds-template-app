"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function BadgeShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="font-semibold px-8 py-3">
          Hello, World!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Component Showcase</DialogTitle>
          <DialogDescription>
            Professional badge components for government and enterprise applications
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Standard Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="muted">Muted</Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Status Indicators</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success">Approved</Badge>
              <Badge variant="warning">Pending Review</Badge>
              <Badge variant="info">In Progress</Badge>
              <Badge variant="destructive">Rejected</Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Priority Levels</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="critical">Critical</Badge>
              <Badge variant="high">High Priority</Badge>
              <Badge variant="medium">Medium</Badge>
              <Badge variant="low">Low Priority</Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Size Variants</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="text-xs px-2 py-0.5">Small</Badge>
              <Badge className="px-2.5 py-0.5">Default</Badge>
              <Badge className="text-sm px-3 py-1">Large</Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
