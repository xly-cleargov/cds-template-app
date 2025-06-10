import { PageHeader } from "@/components/blocks/page-header"
import { Button } from "@/components/ui/button"
import { Wand2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-start mb-8">
          <PageHeader
            icon={Wand2}
            title="App Title"
            description="Welcome to your government application. Use the design system to build consistent, accessible interfaces."
            className="mb-0"
          />
          <Link href="/design-system" scroll={false}>
            <Button variant="ghost" size="sm">
              View Design System
            </Button>
          </Link>
        </div>
        <p className="text-base">
          Fork this project to begin vibing your own application. Click on "View Design System" to see examples of
          Components, Blocks, and Page Layouts you can use. When done, simply hide the button.
        </p>
      </div>
    </div>
  )
}
