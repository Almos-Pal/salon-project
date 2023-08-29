import Image from "next/image";
import { PhoneIcon,LocationIcon } from "@/src/components/svg";

export default function Contact() {
  return (
    <section id="Contact" className="bg-white flex flex-col justify-between items-center gap-10 mt-10 text-center xl:pt-64  2xl:pt-72 3xl:pt-96">
      <h1 className="text-3xl font-black py-10 xl:text-6xl 3xl:text-8xl 3xl:p-20 3xl:pt-64 relative">
        Elérhetőségek
        <div className="h-2 3xl:h-4  bg-primary rounded-md absolute bottom-3 3xl:bottom-0 left-0 right-0 mx-auto w-3/4 "></div>
      </h1>
      <p className="px-10">Kérjen időpontot vagy segítséget az alábbi lehetőségek kiválasztásával!</p>
      <div className=" flex xl:w-full xl:relative xl:z-0 xl:h-[50rem] w-11/12 sm:w-10/12 items-center  flex-col justify-center">
      <div className=" bg-secondary flex flex-col justify-center gap-10 py-10 w-10/12 xl:w-6/12 rounded-xl xl:absolute xl:inset-y-0 xl:left-0 xl:z-10">
        <div className="flex flex-col justify-center gap-10">
          <div className="rounded-full bg-primary w-20 h-20  flex justify-center items-center mx-auto ">
            <Image
              src={LocationIcon}
              alt="Hely ikon"
              width={30}
              height={30}
              objectFit="contain"
            />
          </div>
          <div>
            <p className="font-bold text-lg xl:text-xl 3xl:text-3xl">Cím:</p>
            <p>2220 Vecsés</p>
            <p>Aulich Lajos utca 11</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="rounded-full bg-primary w-20 h-20  flex justify-center items-center mx-auto">
            <Image
              src={PhoneIcon}
              alt="Telefon ikon"
              width={30}
              height={30}
              objectFit="contain"
            />
          </div>
          <div>
            <p className="font-bold text-lg xl:text-xl 3xl:text-3xl">Telefonszámok:</p>
            <p>Fodrászat: <a href="tel:+3630 3756 018" className="hover:font-black transition duration-300">+3630 3756 018</a></p>
            <p>Mester kozmetika: <a href={`tel:+3620 5544 139`} className="hover:font-black transition duration-300">3620 5544 139</a></p>
            <p>Manikűr-műköröm: <a href={`tel:+3620 5228 350`}  className="hover:font-black transition duration-300">+3620 5228 350</a></p>
          </div>
        </div>
        <p className="p-10">Vegye fel a kapcsolatot velünk online.</p>
      </div>
      
      <div className="pt-10 xl:pt-0  w-10/12  xl:w-1/2 xl:self-end">
        <iframe
          className="w-full xl:h-[50rem]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.818570979896!2d19.2637599!3d47.395972699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ea9b63e15675%3A0x69adaaf977a713b0!2sVecs%C3%A9s%2C%20Aulich%20Lajos%20u.%2011%2C%202220!5e0!3m2!1shu!2shu!4v1691326343724!5m2!1shu!2shu"
          title="Google Maps view"
          width="600"
          height="450"
          loading="lazy"
          ></iframe>
      </div>
      </div>
    </section>
  );
}
