import Image from 'next/image';
import { Button } from './ui/button';
import { BiSolidCart } from "react-icons/bi";
import Link from 'next/link';
import { poppins } from '@/constans';

export default function Products() {
  return (
    <div className="w-96 flex flex-col items-center py-10">
      <Image src="/product.png" width={300} height={300} alt="product" />
      <div className='flex flex-col text-white gap-4'>
        <Link href="/shop/uahdeu" className='text-2xl'>Arabika Signature</Link>
        <span className='text-gray-300'>Rp 100.000</span>
        
      </div>
    </div>
  );
}
