import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  icon: LucideIcon
  title: string
  description?: string
  className?: string
}

export function PageHeader({ icon: Icon, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-8 w-8" style={{ color: "#4D96F4" }} />
        <h1
          className="font-semibold"
          style={{
            fontSize: "24px",
            color: "#010658",
          }}
        >
          {title}
        </h1>
      </div>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}
