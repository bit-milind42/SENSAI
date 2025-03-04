import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import react from "react";
import { Button } from "./button";
// import { Button } from "@/components/ui/button";

import { ChevronDown, Layout, LayoutDashboard, StarsIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";

const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items items-center justify-between">
                <Link href='/'>

                <Image src="/logo.png" alt='Sensai Logo' width={200} height={60}
                className="h-12 py-1 w-auto object-contain"
                />
                </Link>
                <div className="flex items-center space-x-2">
                    <SignedIn>
                        <Link href={"/dashboard"}>
                            <Button>
                                <LayoutDashboard className="h-4 w-4"/>
                                <span className="hidden md:block">Industry Insights</span>
                            
                            </Button>
                        </Link>
                    </SignedIn>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>
                                <StarsIcon className="h-4 w-4"/>
                                <span className="hidden md:block">Growth Tools</span>
                                <ChevronDown className="h-4 w-4"/>
                            
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            
                            
                            
                            
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </nav>
           <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </header>
    )
}

export default Header;