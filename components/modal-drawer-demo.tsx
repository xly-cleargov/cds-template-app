"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  WhiteModal,
  WhiteModalContent,
  WhiteModalDescription,
  WhiteModalFooter,
  WhiteModalHeader,
  WhiteModalTitle,
  WhiteModalTrigger,
} from "@/components/ui/white-modal"
import {
  WhiteDrawer,
  WhiteDrawerClose,
  WhiteDrawerContent,
  WhiteDrawerDescription,
  WhiteDrawerFooter,
  WhiteDrawerHeader,
  WhiteDrawerTitle,
  WhiteDrawerTrigger,
} from "@/components/ui/white-drawer"
import { Settings, User, FileText, Plus, Edit, Trash2 } from "lucide-react"

export function ModalDrawerDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Modals</h2>
        <p className="text-muted-foreground mb-6">
          Modal components with clean white backgrounds for government and enterprise applications.
        </p>

        <div className="flex flex-wrap gap-4">
          <WhiteModal>
            <WhiteModalTrigger asChild>
              <Button>
                <User className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </WhiteModalTrigger>
            <WhiteModalContent className="sm:max-w-[425px]">
              <WhiteModalHeader>
                <WhiteModalTitle>Edit Profile</WhiteModalTitle>
                <WhiteModalDescription>
                  Make changes to your profile here. Click save when you're done.
                </WhiteModalDescription>
              </WhiteModalHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" defaultValue="john@example.gov" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="department" className="text-right">
                    Department
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <WhiteModalFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </WhiteModalFooter>
            </WhiteModalContent>
          </WhiteModal>

          <WhiteModal>
            <WhiteModalTrigger asChild>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Create Document
              </Button>
            </WhiteModalTrigger>
            <WhiteModalContent className="sm:max-w-[500px]">
              <WhiteModalHeader>
                <WhiteModalTitle>Create New Document</WhiteModalTitle>
                <WhiteModalDescription>
                  Create a new official document. Fill in the required information below.
                </WhiteModalDescription>
              </WhiteModalHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="doc-title">Document Title</Label>
                  <Input id="doc-title" placeholder="Enter document title" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="doc-type">Document Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="policy">Policy Document</SelectItem>
                      <SelectItem value="procedure">Procedure</SelectItem>
                      <SelectItem value="report">Report</SelectItem>
                      <SelectItem value="memo">Memorandum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter document description" />
                </div>
              </div>
              <WhiteModalFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Create Document</Button>
              </WhiteModalFooter>
            </WhiteModalContent>
          </WhiteModal>

          <WhiteModal>
            <WhiteModalTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Item
              </Button>
            </WhiteModalTrigger>
            <WhiteModalContent>
              <WhiteModalHeader>
                <WhiteModalTitle>Are you absolutely sure?</WhiteModalTitle>
                <WhiteModalDescription>
                  This action cannot be undone. This will permanently delete the selected item and remove all associated
                  data from our servers.
                </WhiteModalDescription>
              </WhiteModalHeader>
              <WhiteModalFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </WhiteModalFooter>
            </WhiteModalContent>
          </WhiteModal>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Drawers</h2>
        <p className="text-muted-foreground mb-6">
          Drawer components with clean white backgrounds that slide in from different directions.
        </p>

        <div className="flex flex-wrap gap-4">
          <WhiteDrawer>
            <WhiteDrawerTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings (Right)
              </Button>
            </WhiteDrawerTrigger>
            <WhiteDrawerContent side="right">
              <WhiteDrawerHeader>
                <WhiteDrawerTitle>Application Settings</WhiteDrawerTitle>
                <WhiteDrawerDescription>
                  Configure your application preferences and system settings.
                </WhiteDrawerDescription>
              </WhiteDrawerHeader>
              <div className="py-4 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <span className="text-sm text-muted-foreground">Receive email notifications</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="theme">Dark Mode</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="theme" />
                    <span className="text-sm text-muted-foreground">Enable dark theme</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="cst">Central Time</SelectItem>
                      <SelectItem value="mst">Mountain Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <WhiteDrawerFooter>
                <Button>Save Settings</Button>
                <WhiteDrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </WhiteDrawerClose>
              </WhiteDrawerFooter>
            </WhiteDrawerContent>
          </WhiteDrawer>

          <WhiteDrawer>
            <WhiteDrawerTrigger asChild>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Navigation (Left)
              </Button>
            </WhiteDrawerTrigger>
            <WhiteDrawerContent side="left">
              <WhiteDrawerHeader>
                <WhiteDrawerTitle>Navigation Menu</WhiteDrawerTitle>
                <WhiteDrawerDescription>Navigate through the application using the menu below.</WhiteDrawerDescription>
              </WhiteDrawerHeader>
              <div className="py-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Users
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Documents
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </WhiteDrawerContent>
          </WhiteDrawer>

          <WhiteDrawer>
            <WhiteDrawerTrigger asChild>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Quick Actions (Bottom)
              </Button>
            </WhiteDrawerTrigger>
            <WhiteDrawerContent side="bottom">
              <WhiteDrawerHeader>
                <WhiteDrawerTitle>Quick Actions</WhiteDrawerTitle>
                <WhiteDrawerDescription>Perform common actions quickly from this panel.</WhiteDrawerDescription>
              </WhiteDrawerHeader>
              <div className="py-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <Plus className="h-6 w-6 mb-2" />
                    Create New
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Edit className="h-6 w-6 mb-2" />
                    Edit
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <FileText className="h-6 w-6 mb-2" />
                    Export
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Settings className="h-6 w-6 mb-2" />
                    Settings
                  </Button>
                </div>
              </div>
            </WhiteDrawerContent>
          </WhiteDrawer>
        </div>
      </div>
    </div>
  )
}
