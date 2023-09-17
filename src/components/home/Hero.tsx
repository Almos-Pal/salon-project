import Image from "next/image";
import Link from "next/link";
import { HairDresserIcon } from "@/src/components/svg";

export default function Hero() {
  return (
    <section
      id="Hero"
      className=" bg-primary flex flex-col sm:flex-row-reverse justify-center items-center sm:bg-secondary xl:min-h-screen"
    >
      <div className=" flex flex-col gap-10 pt-32 sm:pt-0 sm:gap-0 sm:flex sm:flex-row sm:w-full ">
        <div className="flex flex-col gap-10 justify-center items-center sm:items-start sm:pl-5 md:pl-12 xl:pl-24 2xl:pl-44 sm:flex-wrap">
          <h1 className="text-center text-3xl font-black sm:text-4xl md:text-5xl xl:text-7xl 3xl:text-9xl sm:text-left 2xl:justify-self-end">
            Kispatak <br className="hidden sm:block" /> szépségszalon
          </h1>
          <Link href={"#Description"}>
            <button className="bg-white text-black font-bold text-xl w-48 px-5 py-1 rounded-md md:mb-5 sm:bg-primary sm:text-white  transform duration-300 border-8 border-white sm:border-primary sm:hover:border-primary sm:hover:bg-transparent sm:hover:text-black 3xl:text-2xl 3xl:w-60 3xl:py-2">
              Rólunk
            </button>
          </Link>
        </div>

        <div className="xl:min-h-screen sm:w-[24rem] sm:h-[24rem] xl:w-[42.5rem] xl:h-[42.5rem] 2xl:w-[52.5rem] 2xl:h-[52.5rem] sm:ml-auto overflow-hidden relative sm:flex sm:items-end xl:justify-end ">
          <div className="flex justify-center items-center z-10">
            <div className="flex justify-items-center items-center w-[17.5rem] h-[23rem]">
              <Image
                className="h-screen"
                        src={HairDresserIcon}
                        alt="Egy nő vágja a férfi haját."
                        objectFit="contain"
                        layout="fill"
                        objectPosition="bottom "
                        priority
                      
              />
            </div>
          </div>
          <div className="sm:bg-primary sm:rounded-full sm:w-[30rem] sm:h-[30rem] xl:w-[55rem] xl:h-[55rem] 2xl:w-[70rem] 2xl:h-[70rem] sm:absolute sm:right-0 sm:bottom-0  sm:transform sm:translate-x-1/4 sm:translate-y-1/4 " />
        </div>
      </div>
    </section>
  );
}
