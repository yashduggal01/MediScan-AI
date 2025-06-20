"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import {
  FileText,
  Calendar,
  MessageCircle,
  QrCode,
  BarChart3,
  Utensils,
  Heart,
  User,
  Settings,
  LogOut,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { title: "Dashboard", url: "/patient/dashboard", icon: BarChart3 },
  { title: "Medical Records", url: "/patient/records", icon: FileText },
  { title: "Scheduler", url: "/patient/scheduler", icon: Calendar },
  { title: "HealthGPT", url: "/patient/chat", icon: MessageCircle },
  { title: "Diet Plan", url: "/patient/diet", icon: Utensils },
  { title: "QR Access", url: "/patient/qr", icon: QrCode },
  { title: "Blockchain Vault", url: "/patient/blockchain-vault", icon: Shield },
]

function PatientSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-sky-500" />
          <span className="text-xl font-bold text-gray-900">MediCare AI</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.url}>
                <Link
                  href={item.url}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sky-50 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/patient/profile"
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/patient/settings"
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/"
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <PatientSidebar />
        <SidebarInset className="flex-1">
          <header className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <SidebarTrigger />
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  Emergency
                </Button>
                <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
