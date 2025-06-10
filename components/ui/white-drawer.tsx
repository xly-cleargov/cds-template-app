"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import * as React from "react"

// Just use the existing Sheet components but override the content background
const WhiteDrawer = Sheet

const WhiteDrawerTrigger = SheetTrigger

const WhiteDrawerClose = SheetClose

const WhiteDrawerContent = React.forwardRef<
  React.ElementRef<typeof SheetContent>,
  React.ComponentPropsWithoutRef<typeof SheetContent>
>(({ className, ...props }, ref) => <SheetContent ref={ref} className={cn("bg-white", className)} {...props} />)
WhiteDrawerContent.displayName = "WhiteDrawerContent"

const WhiteDrawerHeader = SheetHeader
const WhiteDrawerFooter = SheetFooter
const WhiteDrawerTitle = SheetTitle
const WhiteDrawerDescription = SheetDescription

export {
  WhiteDrawer,
  WhiteDrawerTrigger,
  WhiteDrawerClose,
  WhiteDrawerContent,
  WhiteDrawerHeader,
  WhiteDrawerFooter,
  WhiteDrawerTitle,
  WhiteDrawerDescription,
}
