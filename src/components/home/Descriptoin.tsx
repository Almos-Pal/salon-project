import Image from "next/image";
import salon from "@/public/Images/place/houseOutside.webp";
import Link from "next/link";


export default function Description() {
  return (
    <section id="Description" className="bg-white flex flex-col justify-between items-center max-h-screen ">
      <div className="flex flex-col gap-10 justify-center md:flex-row ">
        <div className="flex flex-col gap-10 justify-center items-center xl:w-1/2 mt-10 text-center xl:p-20 2xl:p-40 3xl:p-60 ">
        <h1 className="text-3xl font-black xl:text-6xl 3xl:text-8xl ">Kedves látogató!</h1>

          <p className="px-10">
            Üzletünk immár 20 éve vár benneteket. Családias légkör, tapasztalt,
            kedves szakemberek, kedvező árak.
          </p>
          <Link href={"#Staff"}>

          <button className="bg-primary text-white font-bold text-xl w-48 px-5 py-1 rounded-md md:mb-5 sm:bg-primary sm:text-white  transform duration-300 border-8 border-primary sm:hover:border-primary sm:hover:bg-transparent sm:hover:text-black 3xl:text-2xl 3xl:w-60 3xl:py-2">
          Szolgáltatások
          </button>
          </Link>
        </div>
        <div className="w-full  flex relative md:order-first max-w-1/2 ">
        <Image
          className="max-h-screen "
          src={salon}
          alt="A szalonról egy külső fotó"
          objectFit="cover"
          layout="responsive"
        />
        </div>
       
      </div>
    </section>
  );
}
