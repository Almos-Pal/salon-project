import {StaffMemberPage} from '@/typings'
import {BeauticianIconMedium, BeauticianIConLarge,BeauticianIconXL} from '@/src/components/svg';
import Image from "next/image"
const Hero: React.FC<StaffMemberPage> = (staffMember) =>  {
    return (
        <section  className="bg-primary flex flex-col sm:flex-row-reverse justify-center items-center sm:bg-secondary xl:min-h-screen">
        <div className=" flex flex-col gap-10 pt-32 sm:pt-0 sm:gap-0 sm:flex sm:flex-row sm:w-full ">
          <div className="flex flex-col gap-10 justify-center items-center sm:items-start sm:pl-5 md:pl-12 sm:w-6/12 xl:pl-24 2xl:pl-44 sm:flex-wrap">
          <div className='bg-white sm:bg-secondary rounded-xl py-10 w-10/12 flex flex-col gap-5  text-center sm:pb-0' >
  
            <h1 className=" text-3xl  font-black sm:text-4xl md:text-5xl xl:text-7xl 3xl:text-9xl ">{staffMember.job}</h1>
            <a href={`tel:${staffMember.phone}`}><h2 className="font-bold text-xl xl:text-3xl 3xl:text-5xl hover:font-black transition-colors duration-800 ease-in-out">{staffMember.phone}</h2></a>
            <p className='px-10 sm:px-0 md:px-10 '>{staffMember.description}</p>
            </div>
         
          </div>
         
        
          <div className="xl:min-h-screen sm:w-[24rem] sm:h-[24rem] xl:w-[42.5rem] xl:h-[42.5rem] 2xl:w-[52.5rem] 2xl:h-[52.5rem] sm:ml-auto overflow-hidden relative sm:flex sm:items-end xl:justify-end ">
            <div className="flex justify-center items-center z-10">
             
                {staffMember.id === "KoselaErika"? (
                    <div className={"flex justify-items-center items-center w-[17.5rem] h-[23rem]"}>
                       <Image
                          className="h-screen sm:hidden"
                          src={staffMember.mainIcon}
                          alt="Egy nő fekszik miközben a kozmetikus kezeli."
                          objectFit="contain"
                          layout="fill"
                          objectPosition="bottom "
                          priority
                        />
                        <Image
                        className="h-screen hidden sm:block xl:hidden"
                        src={BeauticianIconMedium}
                        alt="Egy nő fekszik miközben a kozmetikus kezeli."
                        objectFit="contain"
                        layout="fill"
                        objectPosition="bottom "
                        priority
                      />
                      <Image
                        className="h-screen hidden xl:block 2xl:hidden"
                        src={BeauticianIConLarge}
                        alt="Egy nő fekszik miközben a kozmetikus kezeli."
                        objectFit="contain"
                        layout="fill"
                        objectPosition="bottom "
                        priority
                      />
                      <Image
                        className="h-screen hidden 2xl:block"
                        src={BeauticianIconXL}
                        alt="Egy nő fekszik miközben a kozmetikus kezeli."
                        objectFit="contain"
                        layout="fill"
                        objectPosition="bottom "
                        priority
                      />
                    </div>
                    
                 ) : 
                 
                    <div className={"flex justify-items-center items-center w-[17.5rem] h-[23rem]"}>
                      <Image
                        className="h-screen"
                        src={staffMember.mainIcon}
                        alt={staffMember.mainIconAlt}
                        objectFit="contain"
                        layout="fill"
                        objectPosition="bottom "
                        priority
                      />
                      
                 </div>}
              
                
            </div>
            <div className="sm:bg-primary sm:rounded-full sm:w-[30rem] sm:h-[30rem] xl:w-[55rem] xl:h-[55rem] 2xl:w-[70rem] 2xl:h-[70rem] sm:absolute sm:right-0 sm:bottom-0  sm:transform sm:translate-x-1/4 sm:translate-y-1/4 " />
          </div>
        </div>
      </section>
    )
}
export default Hero