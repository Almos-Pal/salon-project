import Image from "next/image";
import { StaffMemberProps } from '@/typings';
import Link from "next/link";

const StaffMember: React.FC<StaffMemberProps> = ({id, name, description, phone, src }) => {
  return (
    <div className="bg-white flex flex-col items-center text-center py-10 gap-2 rounded-xl sm:w-72 md:w-80 3xl:w-96 3xl:h-[40rem]">
      <div className="w-32 h-32 3xl:w-64 3xl:h-64 2xl:w-40 2xl:h-40 relative">

      <Image src={src} alt={`${name} profilképe.`  } layout="fill" className="rounded-full" />
      </div>
      <p className="font-bold text-lg xl:text-xl 3xl:text-3xl 3xl:pt-10">{name}</p>
      <p>{description}</p>
      <p><a href={`tel:${phone}`} className="hover:font-black transition-colors duration-800 ease-in-out">{phone}</a></p>
      <Link href={`/staff/${id}`}> 
      <button className="bg-primary text-white font-bold text-xl w-48  py-1 rounded-md md:mb-5 sm:bg-primary sm:text-white  transform duration-300 border-8 border-primary sm:hover:border-primary sm:hover:bg-transparent sm:hover:text-black 3xl:text-2xl 3xl:w-60 3xl:py-2 3xl:mt-10">Tudj meg többet</button>
      </Link>
    </div>
  );
};

export default StaffMember;


