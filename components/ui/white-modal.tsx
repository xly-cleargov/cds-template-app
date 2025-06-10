"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import * as React from "react"

// Just use the existing Dialog components but override the content background
const WhiteModal = Dialog

const WhiteModalTrigger = DialogTrigger

const WhiteModalContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ className, ...props }, ref) => <DialogContent ref={ref} className={cn("bg-white", className)} {...props} />)
WhiteModalContent.displayName = "WhiteModalContent"

const WhiteModalHeader = DialogHeader
const WhiteModalFooter = DialogFooter
const WhiteModalTitle = DialogTitle
const WhiteModalDescription = DialogDescription

export {
  WhiteModal,
  WhiteModalTrigger,
  WhiteModalContent,
  WhiteModalHeader,
  WhiteModalFooter,
  WhiteModalTitle,
  WhiteModalDescription,
}
