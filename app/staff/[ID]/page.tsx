import Image from 'next/image';
import Gallery from '@/app/Gallery'
import Contact from '@/app/Contact';
import { StaffMemberPage } from '@/typings';
import { HairDresserIcon, HairDresserProducts,BeauticianProducts,ManicureProducts, BeauticianIconMedium,ManicureIcon,GiftCardIcon,PhoneIcon2, BeauticianIconMobile,BeauticianIConLarge,BeauticianIconXL } from '@/src/svg';

type Props = {
    params: {
        ID: string
    }
}


export async function generateStaticParams() {
 const staffIds = ['CsomorKatalin','KoselaErika','SusaMaria']
 
 return staffIds.map((ID) => {
  return {
    ID,
  }
 })
}

export default function Members({params: {ID}} : Props)  {
    const staffMembers: StaffMemberPage[] = [
        {
            id: "CsomorKatalin",
            name: "Csomor Katalin",
            description: "számos lehetőség közül választhatsz, divatos hajvágások, festés, melírozás és egyéb stílusos frizurák.",
            job: "Női - férfi fodrász",
            services: [
              "vágás",
              "festés",
              "melírozás",
             
            ],
            productsSvg:  HairDresserProducts,
            productsSvgAlt: "Hajszárító, fésű, olló, borotva",
            phone: "+3630 3756 018",
            mainIconAlt: "Egy nő vágja a férfi haját.",
            mainIcon: HairDresserIcon,
            hasJob: false,
            Images: {
              src: [
                "/../public/Images/place/inside1.webp",
                "/../public/Images/place/inside2.webp",
                "/../public/Images/place/inside3.webp",
                "/../public/Images/place/houseOutside.webp",
              ],
              ImageAlts: [
                "Belső kép a szalonról, váró részleg.",
                "Belső kép a szalonról, fodrász részleg.",
                "Belső kép a szalonról, körmös részleg.",
                "A szalonról egy külső fotó.",
              ],
            } 
           
          },

        {
            id: "KoselaErika",
          name: "Kosela Erika",
          description: "frissítő, regenaráló, tisztító, feszesítő, anti-aging,hámlasztó, bőrmegújító kezelések.",
            job: "Mester kozmetika",
            services: [
              "zsírbontó testkezelés",
              "gyantázás",
              "nyirokdrenázs",
              "rádiófrekvencia ultrahang",
              "4D szempilla hosszabbítás",
              "sminktetoválás",
              "bőrápolási szaktanácsadás",
            ],
          phone: "+3620 5544 139",
          productsSvg:BeauticianProducts,
          productsSvgAlt:"Szemöldök és szempilla, gyanta, csipesz, vattapamacs, púderecset, szempillaspirál",
          mainIcon: BeauticianIconMobile,
            mainIconAlt:"Egy nő fekszik miközben a kozmetikus kezeli.",
          hasJob: true,
          Images: {
            src: [
              "/../public/Images/KoselaErika/beaPlace1.webp",
              "/../public/Images/KoselaErika/beaPlace2.webp",
              "/../public/Images/KoselaErika/beaPlace3.webp",
              "/../public/Images/KoselaErika/beaWork1.webp",
              "/../public/Images/KoselaErika/After1.webp",
              "/../public/Images/KoselaErika/After2.webp",
              "/../public/Images/KoselaErika/After3.webp",
              "/../public/Images/KoselaErika/After4.webp",
              "/../public/Images/KoselaErika/After5.webp",
              "/../public/Images/KoselaErika/Before1.webp",
              "/../public/Images/KoselaErika/Before2.webp",
              "/../public/Images/KoselaErika/Before3.webp",
  
            ],
            ImageAlts: [
              "Egy kép a kozmetikai helyiségről és a kezelőágyról.",
              "Egy kép a kozmetikai helyiségről és a kezelőágyról, ajtó felöli szemszögből.",
              "Teljes kép a kozmetikai helyiségről.",
              "Erika éppen szépíti egyik ügyfelét.",
              "Egy hölgy felülnézetből a kozmetika után.",
              "Egy hölgy friss szemöldökökkel a kozmetika után.",
              "Egy hölgy szempillája és sötét szemöldöke felülnézetből a kozmetika után.",
              "Egy idősebb hölgy szemöldöke oldalról a kozmetika után.",
              "Egy idősebb hölgy szemöldöke szemből a kozmetika után.",
              "Egy vöröshajú hölgy szemöldöke szemből a kozmetika előtt.",
              "Egy idősebb hölgy szemöldöke oldalról a kozmetika előtt.",
              "Egy idősebb hölgy szemöldöke a másik oldalról a kozmetika előtt.",
            ],
          }
       
        },
        {
            id:"SusaMaria",
          name: "Susa Mária",
          description: "Próbáld ki a tartós és fényes eredményt nyújtó géllakozást a tökéletes manikűrhöz, vagy válaszd a zselés építést és töltést, amely hosszan tartó és erős körmöket eredményez.",
          job: "Manikűr - műköröm",
          services: [
            "Géllakozás",
            " Zselés építés és töltés",
            
          ],
          phone: "+3620 5228 350",
          productsSvg: ManicureProducts,
          productsSvgAlt:"Körömvágó olló, piros táska, körömcsipesz, géllak, körömreszelő, körömbőr feltoló",
          mainIcon: ManicureIcon,
            mainIconAlt:"A piros ruhás körmös éppen egy másik lány körmét csinálja.",
          hasJob: true,
          Images:{
            src: [
              "/../public/Images/SusaMaria/manWork1.webp",
              "/../public/Images/SusaMaria/manWork2.webp",
              "/../public/Images/SusaMaria/manWork3.webp",
              "/../public/Images/SusaMaria/manWork4.webp",
              "/../public/Images/SusaMaria/manWork5.webp",
              "/../public/Images/SusaMaria/manWork6.webp",
              "/../public/Images/SusaMaria/manWork7.webp",
            ],
            ImageAlts: [
              "Piros-fehérre festet köröm, csillagokkal a köröm közepén.",
              "Csillogos fehér-szürke körömök.",
              "Sötétszürke körmök, aranyos-feketés foltokkal a közepén.",
              "Vérvörös körmök rózsaszín átmenettel a gyűrűsujjon.",
              "Rózsaszín-fehér körmök aranyos csillámmal.",
              "ciánkékes-zöldes körmök kék csillámmal.",
              "Bézs színű körmök, karácsonyi hangulatban, rénszarvassal, hópehellyel mintázva.",
            ],
          } 
          
        },
      ];
  
    const staffMember = staffMembers.find(member => member.id === ID);
    if (!staffMember) {
      return <div>Staff member not found.</div>;
    }
  
    return (
      <>
            <section  className="bg-primary flex flex-col sm:flex-row-reverse justify-center items-center sm:bg-secondary xl:min-h-screen">
      <div className=" flex flex-col gap-10 pt-32 sm:pt-0 sm:gap-0 sm:flex sm:flex-row sm:w-full ">
        <div className="flex flex-col gap-10 justify-center items-center sm:items-start sm:pl-5 md:pl-12 sm:w-6/12 xl:pl-24 2xl:pl-44 sm:flex-wrap">
        <div className='bg-white sm:bg-secondary rounded-xl py-10 w-10/12 flex flex-col gap-5  text-center sm:pb-0' >

          <h1 className=" text-3xl  font-black sm:text-4xl md:text-5xl xl:text-7xl 3xl:text-9xl">{staffMember.job}</h1>
          <h2 className="font-bold text-xl xl:text-3xl 3xl:text-5xl">{staffMember.phone}</h2>
          <p className='px-10 sm:px-0 md:px-10'>{staffMember.description}</p>
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

          <section className='bg-secondary text-center flex flex-col justify-end items-center py-10'>
          <div className='flex flex-col gap-10 justify-center items-center pt-20'>
          
          <div className='bg-white w-8/12 h-[19rem] px-10 py-10 rounded-xl'>
            <div className='3xl:pt-10 pb-10'>

            <h3 className='font-bold text-lg xl:text-xl 3xl:text-3xl '>Ajándékkártya is kapható!</h3>
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

            <div className='bg-white w-8/12 h-[19rem] p-10  rounded-xl'>
              <div className='3xl:pt-10 pb-10'>

              <h3 className='font-bold text-lg xl:text-xl 3xl:text-3xl '>Érdeklődj az árakról telefonon vagy a helyszínen.</h3>
              </div>
              <div className="relative rounded-full w-20 h-20 flex justify-center items-center mx-auto ">
            <Image
              src={PhoneIcon2}
              alt="Ajándékkártya ikon"
              layout='fill'
              objectFit="contain"
            />
          </div>
            </div>
          </div>
          </section>
          <Gallery hasJob={staffMember.hasJob} Images={staffMember.Images} />
          <Contact/>

      </>
  
    );
  };
  