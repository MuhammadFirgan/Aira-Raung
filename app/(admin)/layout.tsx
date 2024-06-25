import DashboardNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function layout({ children } : {children: React.ReactNode}) {
    return (
      <main className="relative">
        <div className="md:hidden">
          {/* Mobile Menu Icon */}
          <DashboardNav />
          
        </div>
        <div className="flex">
          <div className='hidden lg:block'>
            <Sidebar />
          </div>
          <section className='flex min-h-screen  max-md:pb-14 '>

            {children}
          </section>
        </div>
     
    </main>
    )
  }