import { bebas_neue } from '@/constans';
import Image from 'next/image';
import { BiSolidStar, BiLogoInstagram } from "react-icons/bi";

export default function About() {
  return (
    <section className="flex bg-white px-10 py-40 justify-between flex-col gap-4 lg:flex-row items-center relative">
        <div className="w-full sm:max-w-2xl ">
          <h1 className={`${bebas_neue.className} text-6xl`}>AiraRaung</h1>
          <p className="text-sm my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quas voluptate debitis! Minima unde aliquid ab enim ipsam, esse quos repellendus atque velit doloribus quasi culpa, sapiente vitae cumque harum quae? Nihil labore, nulla, est, maxime architecto expedita minima et facilis sequi placeat iusto eius blanditiis incidunt commodi iure officia aut earum minus quas. Adipisci aliquam obcaecati commodi similique atque dolor voluptatem unde mollitia beatae. Molestiae, qui saepe doloribus asperiores ex quo blanditiis unde recusandae nihil beatae veritatis rerum quod praesentium tempore aperiam voluptatem dolor corporis laboriosam quibusdam non? Sequi ratione doloremque beatae id deserunt veritatis. </p>
        </div>
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 w-72 h-52 sm:w-[500px] sm:h-96 sm:-bottom-10 sm:-left-10 primary-color z-10"></div>
          <Image src="/About.jpeg" alt="About" width={500} height={500} className="relative z-50" />
          <div className="absolute -top-5 -right-5 rounded-lg bg-white shadow-xl px-8 py-4 z-50">
            <p>Kopi Bubuk Kualitas Terbaik</p>
            <div className="flex justify-center gap-3 mt-3 text-2xl text-yellow-500">
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
              <BiSolidStar />
            </div>
          </div>
        </div>
        <div className="hidden absolute bottom-0 left-0 bg-green-400 w-32 h-32 blur-[100px] rounded-full lg:block "></div>
      </section>
  )
}
