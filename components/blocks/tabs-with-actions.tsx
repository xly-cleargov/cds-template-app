"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface TabItem {
  value: string
  label: string
  content: ReactNode
}

interface ActionButton {
  label: string
  icon?: LucideIcon
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  onClick?: () => void
}

interface TabsWithActionsProps {
  tabs: TabItem[]
  actions: ActionButton[]
  defaultValue?: string
  className?: string
}

export function TabsWithActions({ tabs, actions, defaultValue, className }: TabsWithActionsProps) {
  return (
    <Tabs defaultValue={defaultValue || tabs[0]?.value} className={className || ""}>
      <div className="flex items-start justify-between mb-0">
        <TabsList variant="primary">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} variant="primary" value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex gap-2">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button key={index} variant={action.variant || "default"} onClick={action.onClick}>
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {action.label}
              </Button>
            )
          })}
        </div>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
