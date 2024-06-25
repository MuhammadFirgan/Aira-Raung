
import { Button } from '@/components/ui/button';
import Quantity from '@/components/ui/quantity';
import Weight from '@/components/ui/weight';
import { bebas_neue } from '@/constans';

import Image from 'next/image';


export default function page({ params } : { params: { slug: string; } }) {

  return (
    <div className="flex flex-col sm:flex-row items-center px-10 py-32">
    
      {/* {params.slug} */}
      <Image src="/product.png" width={500} height={500} alt="product detail" />
      <div>
        
        <h1 className={`text-5xl mb-4 ${bebas_neue.className}`}>Arabika Signature</h1>
        <span className={`mb-4 block text-2xl text-gray-700 ${bebas_neue.className} text-2xl`}>Rp 100.000</span>
        <div className='mb-4'>
            <h2 className='font-semibold'>Detail</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, commodi!</p>
        </div>
        <div className="mb-4">
            <h2 className='mb-2 font-semibold'>Berat : </h2>
            <div className="flex gap-5">
                <Weight value="100"/>
                <Weight value="150"/>
                <Weight value="200"/>
                
            </div>
        </div>
        <Quantity />
        <Button className="w-full lg:w-3/4">
          Beli Sekarang
        </Button>
      </div>
        
    </div>
  )
}
