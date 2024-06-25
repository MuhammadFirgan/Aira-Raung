import { bebas_neue } from '@/constans'
import React from 'react'
import ProductCard from '@/components/ProductCard';

export default function Product() {
  return (
    <section className="bg-gray-950 py-20">
        <h1 className={`${bebas_neue.className} text-6xl text-white px-10 py-12 text-center`}>Produk Kami</h1>
        <div className="flex overflow-x-auto w-full whitespace-nowrap gap-8 scroll-smooth">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
  )
}
