"use client"

import { PageHeader } from "@/components/blocks/page-header"
import { TabsWithActions } from "@/components/blocks/tabs-with-actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, BarChart3, Settings, Plus, Download } from "lucide-react"

export function BlocksShowcase() {
  const tabsData = [
    {
      value: "overview",
      label: "Overview",
      content: <p className="text-sm text-muted-foreground">Overview content would be displayed here.</p>,
    },
    {
      value: "details",
      label: "Details",
      content: <p className="text-sm text-muted-foreground">Detailed information would be shown in this section.</p>,
    },
    {
      value: "settings",
      label: "Settings",
      content: <p className="text-sm text-muted-foreground">Configuration options would be available here.</p>,
    },
  ]

  const actionsData = [
    {
      label: "Export",
      icon: Download,
      variant: "ghost" as const,
      onClick: () => console.log("Export clicked"),
    },
    {
      label: "Add New",
      icon: Plus,
      variant: "default" as const,
      onClick: () => console.log("Add New clicked"),
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Page Header Examples</h2>
        <p className="text-muted-foreground mb-6">
          Reusable page header blocks with consistent styling for government and enterprise applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Header</CardTitle>
            <CardDescription>Main dashboard page header</CardDescription>
          </CardHeader>
          <CardContent>
            <PageHeader
              icon={BarChart3}
              title="Dashboard Overview"
              description="Monitor key metrics and performance indicators across all departments and services."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>User administration page header</CardDescription>
          </CardHeader>
          <CardContent>
            <PageHeader
              icon={Users}
              title="User Management"
              description="Manage user accounts, roles, and permissions for system access control."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document Library</CardTitle>
            <CardDescription>Document management page header</CardDescription>
          </CardHeader>
          <CardContent>
            <PageHeader
              icon={FileText}
              title="Document Library"
              description="Store, organize, and manage official documents and records securely."
            />           
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>Configuration page header</CardDescription>
          </CardHeader>
          <CardContent>
            <PageHeader
              icon={Settings}
              title="System Configuration"
              description="Configure system-wide settings, preferences, and administrative options."
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Tabs with Actions</h2>
        <p className="text-muted-foreground mb-6">
          Tab navigation with action buttons aligned to the right for common page operations.
        </p>

        <TabsWithActions tabs={tabsData} actions={actionsData} defaultValue="overview" />
      </div>
    </div>
  )
}
