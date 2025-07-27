import * as React from "react"
import { CodeXml } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      items: [
        {
          title: "About",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
      ],
    },
    {
      title: "Software Projects",
      url: "#",
      items: [
        {
          title: "Game Studio Site",
          url: "#",
        },
        {
          title: "Commerce Website",
          url: "#",
          isActive: true,
        },
        {
          title: "BMS Tech Site",
          url: "#",
        },
        {
          title: "Pokedex App",
          url: "#",
        },
        {
          title: "SCSS Framework",
          url: "#",
        },
      ],
    },
    {
      title: "UX/UI Projects",
      url: "#",
      items: [
        {
          title: "Portfolio Website",
          url: "#",
        },
        {
          title: "Mobile Ordering App",
          url: "#",
        },
        {
          title: "Phone Case Store",
          url: "#",
        },
        {
          title: "NFT Marketplace",
          url: "#",
        },
        {
          title: "City of Ottawa Site",
          url: "#",
        },
      ],
    },
    {
      title: "Graphic Design",
      url: "#",
      items: [
        {
          title: "Roadside Signs",
          url: "#",
        },
        {
          title: "Magazine Ads",
          url: "#",
        },
        {
          title: "Ad Campaigns",
          url: "#",
        },
        {
          title: "Business Cards",
          url: "#",
        },
        {
          title: "Menus",
          url: "#",
        },
      ],
    },
    {
      title: "Photography",
      url: "#",
      items: [
        {
          title: "Portraits",
          url: "#",
        },
        {
          title: "Food",
          url: "#",
        },
        {
          title: "Golf Shoot",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <CodeXml className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Carmen Vacchio</span>
                  <span className="font-cormorant-garamond">Software Developer</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-bold opacity-70">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
} 