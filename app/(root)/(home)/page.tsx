import VideoComponent from "@/components/VideoComponent";
import { poppins, bebas_neue } from "@/constans";
import Link from "next/link";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import { Button } from "@/components/ui/button";



export default function page() {

  
  return (
    <>
      <section className={` text-white ${bebas_neue.className} bg-gray-950 pb-16 relative`}>
        <div className="hidden bg-green-600 w-16 h-16 rounded-full sm:block absolute top-0 right-0 blur-3xl"></div>
        <div className="hidden absolute top-20 left-0 bg-green-600 w-60 h-60 blur-[100px] rounded-full sm:block lg:translate-x-60"></div>
        <div className="absolute bottom-0 right-0 bg-green-600 w-60 h-60 blur-[100px] rounded-full lg:-translate-x-60"></div>
        <div className="relative z-50 flex flex-col items-center gap-7 px-10">
          <h1 className="text-2xl sm:text-6xl text-center max-w-3xl mx-auto mt-9">Kopi Bubuk Berkualitas untuk Hari yang Lebih Baik</h1>
          <Button asChild size="lg" className={`${poppins.className}`} variant="primary">
            <Link href="/login">Contact</Link>
          </Button>
          <VideoComponent />
        </div>
      </section>
      <About />
      <Product />
      <Contact />
      
    </>
  )
}
