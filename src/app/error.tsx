'use client' 
 
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ErrorIcon } from '@/src/components/svg'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {

    console.error(error)
  }, [error])
 
  return (
    <section
        className=" bg-primary flex flex-col xl:flex-row-reverse justify-center items-center xl:bg-secondary min-h-screen xl:min-auto-0 xl:min-h-screen"
      >
        <div className=" flex flex-col gap-10 pt-32 xl:pt-0 xl:gap-0 xl:flex xl:flex-row w-full ">
          <div className="flex flex-col gap-10 justify-center items-center xl:items-start  md:pl-12 xl:pl-24 2xl:pl-44 xl:flex-wrap">
            <h1 className="text-center text-3xl font-black sm:text-4xl md:text-5xl xl:text-7xl 3xl:text-9xl xl:text-left 2xl:justify-self-end">
            Hoppá! <br /> Hiba történt
            </h1>
            <Link href={"/"}>
              <button className="bg-white text-black font-bold text-xl w-48 px-5 py-1 rounded-md md:mb-5 xl:bg-primary xl:text-white  transform duration-300 border-8 border-white xl:border-primary xl:hover:border-primary xl:hover:bg-transparent xl:hover:text-black 3xl:text-2xl 3xl:w-60 3xl:py-2">
                Főoldal
              </button>
            </Link>
            <button className="bg-white text-black font-bold text-xl w-48 px-5 py-1 rounded-md md:mb-5 xl:bg-primary xl:text-white  transform duration-300 border-8 border-white xl:border-primary xl:hover:border-primary xl:hover:bg-transparent xl:hover:text-black 3xl:text-2xl 3xl:w-60 3xl:py-2"
        onClick={
   
          () => reset()
        }
      >
        Újra probálkozás
      </button>
          </div>
  
          <div className="w-full xl:min-h-screen  xl:w-[42.5rem] xl:h-[42.5rem] 2xl:w-[52.5rem] 2xl:h-[52.5rem] xl:ml-auto overflow-hidden relative xl:flex xl:items-end xl:justify-end ">
            <div className="flex justify-center items-center z-10 w-full">
              <div className="flex justify-items-center items-center w-full h-60 sm:h-96">
                <Image
                className="max-h-screen"
                  src={ErrorIcon}
                  alt="Nem található kép ikonja"
                  objectFit="contain"
                  layout="fill"
                  sizes="100%"
                  objectPosition="bottom "
                  priority
                />
              </div>
            </div>
            <div className="xl:bg-primary xl:rounded-full xl:w-[55rem] xl:h-[55rem] 2xl:w-[70rem] 2xl:h-[70rem] xl:absolute xl:right-0 xl:bottom-0  xl:transform xl:translate-x-1/4 xl:translate-y-1/4 " />
          </div>
        </div>
        <div>
   
    </div>
  
      </section>
      
  )
}