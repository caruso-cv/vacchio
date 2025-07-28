import * as React from "react"
import { CodeXml, ChevronDown } from "lucide-react"
import Link from "next/link"

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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Type definitions
type NavItem = {
  title: string
  url: string
  isActive?: boolean
}

type NavSection = {
  title: string
  url: string
  items?: NavItem[]
}

// This is sample data.
const data: { navMain: NavSection[] } = {
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
          url: "/software/ocelot",
        },
        {
          title: "Commerce Website",
          url: "#",
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
          title: "Unsplash Clone",
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
            {data.navMain.map((item) => {
              // Use accordion for Graphic Design, Photography, and UX/UI Projects
              if (item.title === "Graphic Design" || item.title === "Photography" || item.title === "UX/UI Projects") {
                return (
                  <SidebarMenuItem key={item.title}>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={item.title} className="border-none">
                        <AccordionTrigger className="hover:no-underline py-2 px-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                          <span className="font-bold text-vacchio-black/70">{item.title}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                                  <Link href={subItem.url}>{subItem.title}</Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </SidebarMenuItem>
                )
              }
              
              // Regular menu items for other sections
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="font-bold text-vacchio-black/70">
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                            <Link href={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
} 