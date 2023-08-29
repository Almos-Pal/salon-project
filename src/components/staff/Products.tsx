import {StaffMemberPage} from '@/typings'
import Image from "next/image"

const Products : React.FC<StaffMemberPage> = (staffMember) => {
    return (
        <section className='text-center flex flex-col justify-end items-center py-10'>
        <div  className="flex flex-col gap-10 justify-center items-center pt-20 w-full">
          
      <h1 className=" text-3xl  font-black sm:text-4xl md:text-5xl xl:text-7xl 3xl:text-9xl 3xl:pt-32">Szolgáltatások</h1>
      <div className='flex w-full items-center flex-col md:flex-row md:pt-10 2xl:py-32'>
        <div className='relative w-8/12 h-96 2xl:h-[33rem]'>
          <Image
          src={staffMember.productsSvg}
          alt={staffMember.productsSvgAlt}
          objectFit='contain'
          layout='fill'
          />
        </div>
        <ul className='text-left order-first md:order-none pb-10'>
            {staffMember.services.map((service, index) => (
                <li key={index} className="flex items-center space-x-4 p-1 space-y-4">
                <span className='bg-primary w-2 h-8 rounded-full mr-2'></span>
                {service}
                </li>
            ))}
        </ul>


      </div>
     

      </div>
      </section>
    )
}
export default Products