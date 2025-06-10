import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-button-hover-bg hover:text-button-hover-fg",
        destructive: "bg-destructive text-primary-foreground hover:bg-button-hover-bg hover:text-button-hover-fg",
        outline: "bg-secondary border text-secondary-foreground hover:bg-button-hover-bg hover:text-button-hover-fg",
        secondary: "bg-secondary border text-secondary-foreground hover:bg-button-hover-bg hover:text-button-hover-fg",
        ghost: "hover:bg-button-hover-bg hover:text-button-hover-fg",
        link: "text-primary underline-offset-4 hover:underline hover:bg-button-hover-bg hover:text-button-hover-fg",
      },
      size: {
        default: "h-7 px-4 py-1 text-xs", // Added text-xs (12px)
        sm: "h-5 rounded-md px-4 text-xs", // Added text-xs (12px)
        lg: "h-9 rounded-md px-5 text-xs", // Added text-xs (12px)
        icon: "h-7 w-7 text-xs", // Added text-xs (12px)
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
