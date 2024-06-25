import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { bebas_neue } from "@/constans";

export default function Contact() {
  return (
    <section className="bg-white relative flex flex-col py-20 sm:flex-row">
        <div className="px-10 py-8 w-full sm:w-1/2">
          <h1 className={`${bebas_neue.className} text-3xl mb-10`}>Kontak Kami</h1>
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="grid w-full sm:w-52 lg:w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="nama">Nama</Label>
              <Input type="text" id="nama" placeholder="Nama..." />
            </div>
            <div className="grid w-full sm:w-52 lg:w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="pesan">Deskripsi</Label>
              <Textarea placeholder="Pesan anda..." id="pesan" className="h-40" />
            </div>
            <Button>Kirim</Button>
          </div>
          <div className="my-12 sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-56  lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-44 primary-color px-6 py-4 text-black rounded-lg w-full sm:max-w-64 lg:max-w-xs">
            <div>
              <h3 className={`text-2xl ${bebas_neue.className}`}>Alamat Kami</h3>
              <span className="italic block my-5">JL. Brigpol Sudarlan No.40 Gang Sekolah Alam RT.02 RW.01 Nangkaan Bondowoso</span>
            </div>
            <div>
              <h3 className={`text-2xl ${bebas_neue.className}`}>Nomor Kami</h3>
              <span className="italic block my-5">081234567890</span>
            </div>
            
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252860.65194047996!2d113.84950839889457!3d-8.004332183417235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6c9326bea068b%3A0x68766a54028276d7!2sSumberwringin%2C%20Bondowoso%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1716560224567!5m2!1sen!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full sm:w-1/2 h-auto"></iframe>
      </section>
  )
}
