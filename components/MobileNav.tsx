import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { bebas_neue } from "@/constans"
import Link from "next/link"
  
export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <button className="block text-stone-800 hover:text-stone-600 focus:outline-none p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </SheetTrigger>
        <SheetContent side="left">
            <Link href="/" className="text-stone-800 font-bold text-xl b-8">
                <h1 className={`text-4xl ${bebas_neue.className}`}>AiraRaung</h1>
            </Link>
            
            <div className="flex flex-col ">

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger className='text-base'>Section</AccordionTrigger>
                    <AccordionContent>
                        <Link href="">Home Section</Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href="">About Section</Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href="">Contact Section</Link>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
             
                <Link href="/register">
                <span className="text-stone-800 hover:text-stone-600 pb-4 block">Product List</span>
                </Link>
                <Link href="/register">
                <span className="text-stone-800 hover:text-stone-600 pb-4 block">Transaction</span>
                </Link>
                <Link href="/register">
                <span className="text-stone-800 hover:text-stone-600 pb-4 block">Logout</span>
                </Link>
            </div>
        </SheetContent>
    </Sheet>
  )
}
