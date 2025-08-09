"use client"

import React from "react"
import { AppSidebar } from "@/components/layout/Sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Footer from "../Foorter"

export default function Navigation({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Generate breadcrumb from pathname
  const generateBreadcrumb = () => {
    if (pathname === "/") {
      return [{ name: "Portfolio", href: null }]
    }
    
    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const href = index === segments.length - 1 ? null : `/${segments.slice(0, index + 1).join("/")}`
      const name = segment.charAt(0).toUpperCase() + segment.slice(1)
      return { name, href }
    })
  }

  const breadcrumbItems = generateBreadcrumb()

  return (
    <SidebarProvider
      defaultOpen={false}
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="relative flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden xs:block">
                <BreadcrumbLink href="/">
                  Carmen Vacchio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden xs:block" />
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem className="hidden xs:block">
                    {item.href ? (
                      <BreadcrumbLink href={item.href}>
                        {item.name}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.name}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator className="hidden xs:block" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 relative">
          {children}
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
    
  )
}