import { bebas_neue } from "@/constans";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default async function DashboardNav() {

  return (
    <nav className="bg-transparent py-5 lg:w-[calc(100% - 256px)]">
      <div className="flex justify-between items-center gap-5 md:container ">
        <Link href="/" className="text-stone-800 font-bold text-xl hidden md:block">
          <h1 className={`text-4xl ${bebas_neue.className}`}>Dashboard</h1>
        </Link>

        <div className="">
          <div className="flex items-center absolute top-0 right-0 p-4">

            <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <Link href="/api/auth/signout">Logout</Link>
                </DropdownMenuItem>
                
            </DropdownMenuContent>
            </DropdownMenu>
        
            
              

              

            
          </div>
        </div>
        
      </div>
      
    </nav>
  );
};