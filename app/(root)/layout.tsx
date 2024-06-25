import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


export default function layout({ children } : {children: React.ReactNode}) {
  return (
    <>
    
    <Navbar />
    <main className=" relative">
    {children}
    </main>
    <Footer />
    </>
  )
}
