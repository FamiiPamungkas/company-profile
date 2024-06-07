import {PropsWithChildren, ReactNode, useEffect, useState} from 'react';
import {User} from '@/types';
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/Components/ui/resizable";
import {Gauge, Users} from "lucide-react";
import {Nav} from "@/Components/nav";
import {TooltipProvider} from "@/Components/ui/tooltip";
import {UserNav} from "@/Components/user-nav";
import {usePage} from "@inertiajs/react";
import {initializeCsrf} from "@/lib/axiosInstance";

const viewAccess = new Map<string, string>([
    ['/users', 'users'],
    ['/dashboard', 'dashboard'],
]);

export default function DashboardLayout({header, children}: PropsWithChildren<{
    user: User,
    header?: ReactNode
}>) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeNav, setActiveNav] = useState("");
    const url = usePage().url.split("?")[0];

    useEffect(() => {
        initializeCsrf();
        setActiveNav(viewAccess.get(url) || "");
    }, [])

    function onCollapse() {
        setIsCollapsed(true);
        console.log(url);
    }

    return (
        <TooltipProvider delayDuration={0}>
            <div className="min-h-screen bg-white">
                <ResizablePanelGroup direction="horizontal" className={"min-h-screen border"}>
                    <ResizablePanel
                        collapsible={true}
                        defaultSize={15} minSize={14} maxSize={20}
                        collapsedSize={5}
                        onCollapse={() => onCollapse()}
                        onExpand={() => setIsCollapsed(false)}
                    >
                        <Nav activeNav={activeNav} isCollapsed={isCollapsed}
                             links={[
                                 {
                                     title: "Dashboard",
                                     name: "dashboard",
                                     icon: Gauge,
                                     variant: "default",
                                     path: "/dashboard"
                                 },
                                 {
                                     title: "User",
                                     name: "users",
                                     icon: Users,
                                     variant: "ghost",
                                     path: "/users"
                                 }]}/>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel>
                        <div className="hidden h-full flex-1 flex-col space-y-5 p-5 md:flex">
                            <div className="flex items-center justify-between space-y-2">
                                <div>
                                    {header}
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
