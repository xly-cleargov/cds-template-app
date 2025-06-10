"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ComponentShowcase } from "@/components/component-showcase"
import { BlocksShowcase } from "@/components/blocks-showcase"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function DesignSystemPage() {
  const router = useRouter()

  useEffect(() => {
    // Multiple aggressive scroll attempts
    const scrollToTop = () => {
      // Reset all possible scroll positions
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        // Force a reflow
        document.documentElement.style.scrollBehavior = "auto"
        window.scrollTo(0, 0)
        document.documentElement.style.scrollBehavior = ""
      }
    }

    // Immediate scroll
    scrollToTop()

    // Multiple delayed attempts to catch any async issues
    const timeouts = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
      setTimeout(scrollToTop, 200),
      setTimeout(scrollToTop, 500),
    ]

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Design System</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">ClearGov Design System</h1>
          <p className="text-lg text-muted-foreground">Components, blocks, and layouts for government applications</p>
        </div>

        <Tabs defaultValue="components" className="w-full">
          <TabsList variant="primary">
            <TabsTrigger variant="primary" value="components">
              Components
            </TabsTrigger>
            <TabsTrigger variant="primary" value="blocks">
              Blocks
            </TabsTrigger>
            <TabsTrigger variant="primary" value="layouts">
              Page Layouts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="components">
            <ComponentShowcase />
          </TabsContent>

          <TabsContent value="blocks">
            <BlocksShowcase />
          </TabsContent>

          <TabsContent value="layouts">
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Page Layouts</h2>
              <p className="text-muted-foreground">Complete page layout templates will be available here soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
