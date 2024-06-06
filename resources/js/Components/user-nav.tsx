import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu"
import {Button} from "@/Components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/Components/ui/avatar";
import {Link} from "@inertiajs/react";

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="image/avatar.jpg" alt="@shadcn"/>
                        <AvatarFallback>FP</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">admin</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            admin@fpamungkas.my.id
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={route("profile.edit")} className={"w-full text-left"}>Profile</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem>
                    <Link href={route("logout")} className={"w-full text-left"} method={"post"} as={"button"}>Log Out</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
