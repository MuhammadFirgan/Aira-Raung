import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { bebas_neue } from "@/constans"




export default function page() {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-gray-200 p-4 gap-4">
      <div className='w-full lg:w-3/4 flex flex-wrap bg-white p-2 rounded-lg'>
        <div className="w-96 flex flex-col items-center py-10">
            <Image src="/product.png" width={250} height={250} alt="product" />
            <div className='flex flex-col gap-4'>
                <Link href="/shop/uahdeu" className='text-2xl'>Arabika Signature</Link>
                <span className='text-gray-800'>Rp 100.000</span>  
            </div>
        </div>
        

      </div>
      <div className="bg-white rounded-lg w-full lg:w-auto lg:min-w-[15%] p-4">
        <h1 className={`text-3xl ${bebas_neue.className}`}>Hero Section</h1>
        <form action="" className="mt-8">
          <div className="grid w-full max-w-sm items-center gap-4 mb-4">
            <Label htmlFor="Tagline">Tagline</Label>
            <Textarea id="Tagline" className="h-36" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-4 mb-4">
            <Label htmlFor="video">Video</Label>
            <Input id="video" type="file" />
          </div>
          <Button variant="primary" className="w-full">Button</Button>

        </form>
      </div>
    </div>
  )
}
