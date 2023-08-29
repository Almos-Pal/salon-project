import Hero from '@/src/components/staff/Hero';
import Products from '@/src/components/staff/Products';
import InformationCards from '@/src/components/staff/InformationCards';
import Gallery from '@/src/components/Gallery'
import Contact from '@/src/components/Contact';
import { StaffMemberPage } from '@/typings';
import { notFound } from 'next/navigation'
import { HairDresserIcon, HairDresserProducts,BeauticianProducts,ManicureProducts, ManicureIcon, BeauticianIconMobile, } from '@/src/components/svg';

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
            phone: "+36 30 3756 018",
            mainIconAlt: "Egy nő vágja a férfi haját.",
            mainIcon: HairDresserIcon,
            hasJob: false,
            Images: {
              src: [
                "/Images/place/inside1.webp",
                "/Images/place/inside2.webp",
                "/Images/place/inside3.webp",
                "/Images/place/houseOutside.webp",
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
          description: "frissítő, regenaráló, tisztító, feszesítő, anti-aging, hámlasztó, bőrmegújító kezelések.",
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
          phone: "+36 20 5544 139",
          productsSvg:BeauticianProducts,
          productsSvgAlt:"Szemöldök és szempilla, gyanta, csipesz, vattapamacs, púderecset, szempillaspirál",
          mainIcon: BeauticianIconMobile,
            mainIconAlt:"Egy nő fekszik miközben a kozmetikus kezeli.",
          hasJob: true,
          Images: {
            src: [
              "/Images/KoselaErika/beaPlace1.webp",
              "/Images/KoselaErika/beaPlace2.webp",
              "/Images/KoselaErika/beaPlace3.webp",
              "/Images/KoselaErika/beaWork1.webp",
              "/Images/KoselaErika/After1.webp",
              "/Images/KoselaErika/After2.webp",
              "/Images/KoselaErika/After3.webp",
              "/Images/KoselaErika/After4.webp",
              "/Images/KoselaErika/After5.webp",
              "/Images/KoselaErika/Before1.webp",
              "/Images/KoselaErika/Before2.webp",
              "/Images/KoselaErika/Before3.webp",
  
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
          description: "Próbáld ki a tartós és fényes eredményt nyújtó géllakozást a tökéletes manikűrhöz, vagy válaszd a zselés építést és töltést, amely hosszantartó és erős körmöket eredményez.",
          job: "Manikűr - műköröm",
          services: [
            "géllakozás",
            " zselés építés és töltés",
            
          ],
          phone: "+36 20 5228 350",
          productsSvg: ManicureProducts,
          productsSvgAlt:"Körömvágó olló, piros táska, körömcsipesz, géllak, körömreszelő, körömbőr feltoló",
          mainIcon: ManicureIcon,
            mainIconAlt:"A piros ruhás körmös éppen egy másik lány körmét csinálja.",
          hasJob: true,
          Images:{
            src: [
              "/Images/SusaMaria/manWork1.webp",
              "/Images/SusaMaria/manWork2.webp",
              "/Images/SusaMaria/manWork3.webp",
              "/Images/SusaMaria/manWork4.webp",
              "/Images/SusaMaria/manWork5.webp",
              "/Images/SusaMaria/manWork6.webp",
              "/Images/SusaMaria/manWork7.webp",
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
      notFound()
    }
  
    return (
      <>
          <Hero {...staffMember}/>
          <Products {...staffMember}/>
          <InformationCards {...staffMember}/>
          <Gallery hasJob={staffMember.hasJob} Images={staffMember.Images} />
          <Contact/>

      </>
  
    );
  };
  