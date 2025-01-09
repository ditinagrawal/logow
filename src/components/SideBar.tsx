"use client"
import { cn } from "@/lib/utils"
import { EditorTabs } from "./editor/editor-tabs"
import { useIcon } from "./editor/icon-context"
import { IconSelector } from "./editor/icon-selector"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: React.ReactNode
}

export function Sidebar({ className, children, ...props }: SidebarProps) {
    return (
        <div className={cn("pb-12 h-full overflow-y-auto", className)} {...props}>
            <div className="space-y-4 py-4">
                {children}
            </div>
        </div>
    )
}

export function SidebarLeft({ className, ...props }: SidebarProps) {
    return (
        <div className="fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-64 border-r bg-background">
            <Sidebar className={cn("px-4", className)} {...props}>
                <EditorTabs />
            </Sidebar>
        </div>
    )
}

export function SidebarRight({ className, ...props }: Omit<SidebarProps, 'children'>) {
    const { selectedIcon, setSelectedIcon } = useIcon()

    return (
        <div className="fixed right-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-72 border-l bg-background">
            <Sidebar className={cn("px-0", className)} {...props}>
                <IconSelector
                    selectedIcon={selectedIcon}
                    onSelectIcon={setSelectedIcon}
                />
            </Sidebar>
        </div>
    )
}