"use client"

import {LucideIcon} from "lucide-react"

import {cn} from "@/lib/utils"
import {Tooltip, TooltipContent, TooltipTrigger} from "./ui/tooltip"
import {buttonVariants} from "@/Components/ui/button";
import {Link} from "@inertiajs/react";

interface NavProps {
    isCollapsed: boolean
    activeNav: string
    links: {
        path: string
        name: string
        title: string
        label?: string
        icon: LucideIcon
        variant: "default" | "ghost"
    }[]
}

export function Nav({links, activeNav, isCollapsed}: NavProps) {

    return (
        <div
            data-collapsed={isCollapsed}
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
        >
            <nav
                className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                {links.map((link, index) => {
                        const variant = link.name == activeNav ? "default" : "ghost";
                        return isCollapsed ? (
                            <Tooltip key={index} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={link.path}
                                        className={cn(
                                            buttonVariants({variant: variant, size: "icon"}),
                                            "h-9 w-9",
                                            variant === "default" &&
                                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                                        )}
                                    >
                                        <link.icon className="h-4 w-4"/>
                                        <span className="sr-only">{link.title}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="flex items-center gap-4">
                                    {link.title}
                                    {link.label && (
                                        <span className="ml-auto text-muted-foreground">{link.label}</span>
                                    )}
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <Link
                                key={index}
                                href={link.path}
                                className={cn(
                                    buttonVariants({variant: variant, size: "sm"}),
                                    variant === "default" &&
                                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                                    "justify-start"
                                )}>
                                <link.icon className="mr-2 h-4 w-4"/>
                                {link.title}
                                {link.label && (
                                    <span
                                        className={cn(
                                            "ml-auto",
                                            variant === "default" &&
                                            "text-background dark:text-white"
                                        )}
                                    > {link.label} </span>
                                )}
                            </Link>
                        )
                    }
                )}
            </nav>
        </div>
    )
}
