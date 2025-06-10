"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const tabsListVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      primary: "gap-0 border-b border-border relative",
      secondary: "h-10 border-b border-border",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-4 py-3 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-border rounded-t-md bg-background data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:border-b-0 data-[state=active]:relative data-[state=active]:z-10 mb-[-2px] data-[state=inactive]:bg-transparent data-[state=inactive]:border-transparent data-[state=inactive]:text-primary hover:text-foreground disabled:text-muted-foreground",
        secondary:
          "border-b-2 border-transparent rounded-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
)

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, variant, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn(tabsListVariants({ variant }), className)} {...props} />
  ),
)
TabsList.displayName = TabsPrimitive.List.displayName

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, variant, ...props }, ref) => (
    <TabsPrimitive.Trigger ref={ref} className={cn(tabsTriggerVariants({ variant }), className)} {...props} />
  ),
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "bg-white border rounded-md px-6 py-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
