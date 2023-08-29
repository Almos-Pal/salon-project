import { StaffMemberPage } from "@/typings";
import Image from "next/image";
import {GiftCardIcon,PhoneIcon2,} from '@/src/components/svg'

const InformationCards: React.FC<StaffMemberPage> = (StaffMember) => {
    return (
        <section className='bg-secondary text-center flex flex-col justify-end items-center py-10'>
        <div className='flex flex-col gap-10 justify-center items-center pt-20'>
        
        <div className='bg-white w-8/12 h-[19rem] px-10 py-10 rounded-xl'>
          <div className='3xl:pt-10 pb-10'>

          <p className='font-bold text-lg xl:text-xl 3xl:text-3xl '>Ajándékkártya is kapható!</p>
          </div>
<div className="relative rounded-full w-20 h-20 flex justify-center items-center mx-auto ">
  <Image
    src={GiftCardIcon}
    alt="Telefon ikon"
    layout='fill'
    objectFit="contain"
  />
</div>
</div>

          <div className='bg-white w-8/12 h-[19rem] p-10 group  rounded-xl'>
            <div className='3xl:pt-10 pb-10'>

            <p className='font-bold text-lg xl:text-xl 3xl:text-3xl '>Érdeklődj az árakról telefonon vagy a helyszínen.</p>
            </div>
            <div className="relative rounded-full w-20 h-20 flex justify-center items-center mx-auto  animate-[wiggle_1s_ease-in-out_infinite] sm:group-hover:animate-[wiggle_1s_ease-in-out_infinite] sm:animate-[none]">
                <a href={`tel:${StaffMember.phone}`}>
          <Image
            src={PhoneIcon2}
            alt="Ajándékkártya ikon"
            layout='fill'
            objectFit="contain"
          />
          </a>
        </div>
          </div>
        </div>
        </section>
    )
}
export default InformationCards