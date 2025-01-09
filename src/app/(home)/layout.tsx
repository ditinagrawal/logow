"use client"
import { BackgroundProvider } from "@/components/editor/background-context"
import { HistoryProvider } from "@/components/editor/history-context"
import { IconProvider } from "@/components/editor/icon-context"
import { NavBar } from "@/components/NavBar"
import { SidebarLeft, SidebarRight } from "@/components/SideBar"

interface LayoutProps {
    children: React.ReactNode
}

const defaultIconState = {
    size: 128,
    rotation: 0,
    strokeWidth: 2,
    fillColor: "#000000",
    opacity: 1,
}

const defaultBackgroundState = {
    borderRadius: 8,
    shadowSize: "none" as const,
    gradientType: "none" as const,
    gradientAngle: 45,
    gradientStartColor: "#ffffff",
    gradientEndColor: "#000000",
    backgroundColor: "#ffffff",
}

export default function LogoProLayout({ children }: LayoutProps) {
    return (
        <HistoryProvider
            initialState={{
                icon: defaultIconState,
                background: defaultBackgroundState,
            }}
        >
            <IconProvider>
                <BackgroundProvider>
                    <div className="relative min-h-screen">
                        <NavBar />
                        <div className="flex">
                            <SidebarLeft />

                            <main className="flex-1 pl-64 pr-72">
                                <div className="container py-6">
                                    {children}
                                </div>
                            </main>

                            <SidebarRight />
                        </div>
                    </div>
                </BackgroundProvider>
            </IconProvider>
        </HistoryProvider>
    )
}