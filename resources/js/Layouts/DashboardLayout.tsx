import {PropsWithChildren, ReactNode, useState} from 'react';
import {User} from '@/types';
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/Components/ui/resizable";
import {Gauge, Users} from "lucide-react";
import {Nav} from "@/Components/nav";
import {TooltipProvider} from "@/Components/ui/tooltip";
import {UserNav} from "@/Components/user-nav";

export default function DashboardLayout({user, header, children}: PropsWithChildren<{
    user: User,
    header?: ReactNode
}>) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <TooltipProvider delayDuration={0}>
            <div className="min-h-screen bg-white">
                <ResizablePanelGroup direction="horizontal" className={"min-h-screen border"}>
                    <ResizablePanel
                        collapsible={true}
                        defaultSize={15} minSize={14} maxSize={20}
                        collapsedSize={5}
                        onCollapse={() => setIsCollapsed(true)}
                        onExpand={() => setIsCollapsed(false)}
                    >
                        <Nav isCollapsed={isCollapsed}
                             links={[
                                 {title: "Dashboard", icon: Gauge, variant: "default"},
                                 {
                                     title: "User",
                                     icon: Users,
                                     variant: "ghost"
                                 }]}/>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel>
                        <div className="hidden h-full flex-1 flex-col space-y-5 p-5 md:flex">
                            <div className="flex items-center justify-between space-y-2">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <UserNav/>
                                </div>
                            </div>
                            <main>{children}</main>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>

            </div>
        </TooltipProvider>
    );
}
