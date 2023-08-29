import StaffMember from "./StaffMember";
import { StaffMemberProps } from '@/typings'



const Staff: React.FC = () => {
  const staffMembers: StaffMemberProps[] = [
    {
      id: "CsomorKatalin",
      name: "Csomor Katalin",
      description: "Női - férfi fodrász",
      phone: "+36 30 3756 018",
      src: "/Images/Staff/CsomorKatalin.jpg",
    },

    {
      id: "KoselaErika",
      name: "Kosela Erika",
      description: "Mester kozmetika",
      phone: "+36 20 5544 139",
      src: "/Images/Staff/KoselaErika.jpg",
    },
    {
      id:"SusaMaria",
      name: "Susa Mária",
      description: "Manikűr - műköröm",
      phone: "+36 20 5228 350",
      src: "/Images/Staff/SusaMaria.jpg",
    },
  ];

  return (
    <section id="Staff" className="bg-secondary flex flex-col  py-10 items-center lg:py-32">
      <h1 className="text-3xl font-black pb-10 xl:text-6xl 3xl:text-8xl 3xl:p-32 ">Munkatársak</h1>
      <div className="flex  flex-col lg:flex-row sm:items-center sm:justify-between lg:pt-10  gap-10 w-64 md:w-3/4">
        {staffMembers.map((staff, index) => (
          <StaffMember key={index} {...staff} />
        ))}
      </div>
    </section>
  );
};

export default Staff;
