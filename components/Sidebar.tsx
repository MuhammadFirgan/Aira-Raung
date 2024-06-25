import { bebas_neue } from '@/constans'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react'
import Link from 'next/link'
import LogoutButton from './ui/logoutButton';


export default function Sidebar() {



  return (
    <aside className="sticky left-0 top-0 h-screen p-6 w-52 border-r-2 bg-gray-950 text-white">
      <div className=" flex-col gap-5 hidden lg:flex ">
        <h1 className={`${bebas_neue.className} text-4xl text-white`}>Airaraung</h1>
        <ul className="text-white flex flex-col gap-5 text-sm">
            <li className='pb-4'>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-base'>Section</AccordionTrigger>
                  <AccordionContent>
                    <Link href="/dashboard/section">Home Section</Link>
                  </AccordionContent>
                  <AccordionContent>
                    <Link href="/dashboard/section/about">About Section</Link>
                  </AccordionContent>
                  <AccordionContent>
                    <Link href="/dashboard/section/contact">Contact Section</Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li className='pb-4'><Link href="/dashboard/product_list">Product List</Link></li>
            <li className='pb-4'><Link href="/dashboard/transactions">Transactions</Link></li>
            <li className='pb-4'><Link href="/dashboard/product_list">Product List</Link></li>
            <LogoutButton />
            
        </ul>
      </div>
    </aside>
  )
}
