import { bebas_neue, colors } from "@/constans";


export default function Navbar() {
  return (
    <nav className="px-8 py-5 bg-gray-950 text-white flex justify-between">
      <h1 className={`${bebas_neue.className} text-3xl`}>Aira<span className="text-primary">Raung</span></h1>
      
    </nav>
  )
}
