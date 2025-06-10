"use client"

import { ButtonDropdown } from "@/components/ui/button-dropdown"

export function ButtonDropdownDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Button Dropdown Variants</h3>
        <div className="flex flex-wrap gap-4">
          <ButtonDropdown
            label="Default"
            items={[
              { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
              { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
              { label: "Option 3", onClick: () => console.log("Option 3 clicked") },
            ]}
          />

          <ButtonDropdown
            label="Secondary"
            variant="secondary"
            items={[
              { label: "Edit", onClick: () => console.log("Edit clicked") },
              { label: "Duplicate", onClick: () => console.log("Duplicate clicked") },
              { label: "Delete", onClick: () => console.log("Delete clicked") },
            ]}
          />

          <ButtonDropdown
            label="Ghost"
            variant="ghost"
            items={[
              { label: "Sort A-Z", onClick: () => console.log("Sort A-Z clicked") },
              { label: "Sort Z-A", onClick: () => console.log("Sort Z-A clicked") },
              { label: "Filter", onClick: () => console.log("Filter clicked") },
            ]}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Button Dropdown Sizes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <ButtonDropdown
            label="Small"
            size="sm"
            items={[
              { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
              { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
            ]}
          />

          <ButtonDropdown
            label="Default"
            items={[
              { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
              { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
            ]}
          />

          <ButtonDropdown
            label="Large"
            size="lg"
            items={[
              { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
              { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
            ]}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Button Dropdown with Disabled Items</h3>
        <ButtonDropdown
          label="Actions"
          items={[
            { label: "Approve", onClick: () => console.log("Approve clicked") },
            { label: "Reject", onClick: () => console.log("Reject clicked") },
            { label: "Archive", onClick: () => console.log("Archive clicked"), disabled: true },
          ]}
        />
      </div>
    </div>
  )
}
