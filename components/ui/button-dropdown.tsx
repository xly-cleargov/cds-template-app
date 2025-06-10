"use client"
import { ChevronDown } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export interface ButtonDropdownItem {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export interface ButtonDropdownProps extends Omit<ButtonProps, "onClick"> {
  label: string
  items: ButtonDropdownItem[]
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
}

export function ButtonDropdown({
  label,
  items,
  className,
  variant = "default",
  size = "default",
  align = "center",
  side = "bottom",
  ...props
}: ButtonDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={cn("flex items-center gap-1", className)} {...props}>
          {label}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} side={side} className="w-48">
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            disabled={item.disabled}
            className="hover:bg-button-hover-bg hover:text-button-hover-fg focus:bg-button-hover-bg focus:text-button-hover-fg"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
