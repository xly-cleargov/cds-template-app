import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-xl border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-primary-foreground shadow hover:bg-destructive/90",
        outline: "text-foreground border-border hover:bg-accent hover:text-accent-foreground",
        muted: "border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
        // Status variants for government/enterprise use
        success: "border-transparent bg-success text-success-foreground shadow hover:bg-success/90",
        warning: "border-transparent bg-warning text-warning-foreground shadow hover:bg-warning/90",
        info: "border-transparent bg-info text-info-foreground shadow hover:bg-info/90",
        // Priority variants
        critical: "border-transparent bg-critical text-critical-foreground shadow hover:bg-critical/90",
        high: "border-transparent bg-high text-high-foreground shadow hover:bg-high/90",
        medium: "border-transparent bg-medium text-medium-foreground shadow hover:bg-medium/90",
        low: "border-transparent bg-low text-low-foreground shadow hover:bg-low/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
