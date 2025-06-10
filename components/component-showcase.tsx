"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  AlertCircle,
  Bell,
  CalendarIcon,
  ChevronDown,
  Download,
  Home,
  Mail,
  Menu,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react"
import { addDays, format } from "date-fns"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import { ButtonDropdownDemo } from "@/components/button-dropdown-demo"
import { ModalDrawerDemo } from "@/components/modal-drawer-demo"

export function ComponentShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })
  const [progress, setProgress] = useState(33)

  return (
    <div className="space-y-12">
      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <h3 className="text-2xl font-medium">Heading 3</h3>
            <h4 className="text-xl">Heading 4</h4>
            <p className="text-base">This is a paragraph with regular text.</p>
            <p className="text-sm text-muted-foreground">This is small muted text.</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            With Icon
          </Button>
        </div>
      </section>

      {/* Button Dropdowns */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Button Dropdowns</h2>
        <ButtonDropdownDemo />
      </section>

      {/* Form Components */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here." />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>

            <div>
              <Label>Slider</Label>
              <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Select</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Radio Group</Label>
              <RadioGroup defaultValue="option-one" className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Date Picker</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toDateString() : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Single Date Selection</h3>
            <div className="border rounded-md p-4 bg-white">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </div>
            <p className="text-sm text-muted-foreground">Selected date: {date ? format(date, "PPP") : "None"}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Date Range Selection</h3>
            <div className="border rounded-md p-4 bg-white">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={1}
                className="rounded-md border"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Selected range: {dateRange.from ? format(dateRange.from, "PPP") : "None"} to{" "}
              {dateRange.to ? format(dateRange.to, "PPP") : "None"}
            </p>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Card</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alerts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        </div>
      </section>

      {/* White Background Modals and Drawers */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Modals & Drawers</h2>
        <ModalDrawerDemo />
      </section>

      {/* Navigation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Primary Tabs (Pill Style)</h3>
            <Tabs defaultValue="debt" className="w-full">
              <TabsList variant="primary">
                <TabsTrigger variant="primary" value="debt">
                  Debt Issuances
                </TabsTrigger>
                <TabsTrigger variant="primary" value="collaborators">
                  Collaborators
                </TabsTrigger>
                <TabsTrigger variant="primary" value="audit">
                  Audit Trail
                </TabsTrigger>
              </TabsList>
              <TabsContent value="debt">
                <p>Debt Issuances content goes here.</p>
              </TabsContent>
              <TabsContent value="collaborators">
                <p>Collaborators content goes here.</p>
              </TabsContent>
              <TabsContent value="audit">
                <p>Audit Trail content goes here.</p>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Secondary Tabs (Underlined Style)</h3>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList variant="secondary">
                <TabsTrigger variant="secondary" value="overview">
                  Overview
                </TabsTrigger>
                <TabsTrigger variant="secondary" value="funding">
                  Funding
                </TabsTrigger>
                <TabsTrigger variant="secondary" value="expenditures">
                  Expenditures and Revenues
                </TabsTrigger>
                <TabsTrigger variant="secondary" value="buttons">
                  Buttons
                </TabsTrigger>
                <TabsTrigger variant="secondary" value="test1">
                  Test 1
                </TabsTrigger>
                <TabsTrigger variant="secondary" value="test2">
                  Test 2
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p>Overview content goes here.</p>
              </TabsContent>
              <TabsContent value="funding">
                <p>Funding content goes here.</p>
              </TabsContent>
              <TabsContent value="expenditures">
                <p>Expenditures and Revenues content goes here.</p>
              </TabsContent>
              <TabsContent value="buttons">
                <p>Buttons content goes here.</p>
              </TabsContent>
              <TabsContent value="test1">
                <p>Test 1 content goes here.</p>
              </TabsContent>
              <TabsContent value="test2">
                <p>Test 2 content goes here.</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Open Menu
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  Messages
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Navigate through the application</SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Breadcrumbs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Simple Breadcrumb</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Settings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Complex Breadcrumb with Ellipsis</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/government">Government</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/government/departments">Departments</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Finance</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Government Application Breadcrumb</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Portal</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/budget">Budget Management</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/budget/fiscal-year">FY 2024</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Revenue Projections</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Data Display */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Data Display</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Table</h3>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>
                    <Badge>Paid</Badge>
                  </TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending</Badge>
                  </TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Accordion</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Command</h3>
            <div className="max-w-md">
              <Command className="rounded-lg border shadow-md max-h-[300px]">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="max-h-[200px] overflow-auto">
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Search className="mr-2 h-4 w-4" />
                      <span>Search Files</span>
                    </CommandItem>
                    <CommandItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>Add New Item</span>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandGroup heading="Actions">
                    <CommandItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Send Email</span>
                    </CommandItem>
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>View Profile</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </div>
        </div>
      </section>

      {/* Utilities */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Utilities</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Separator</h3>
            <div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Scroll Area</h3>
            <ScrollArea className="h-72 w-48 rounded-md border p-4">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="text-sm">
                  Item {i + 1}
                </div>
              ))}
            </ScrollArea>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Tooltip</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>
    </div>
  )
}
