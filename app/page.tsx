import Image from 'next/image'
import Hero from './Hero'
import Description from './Descriptoin'
import Staff from './Staff'
import Gallery from './Gallery'
import Contact from './Contact'


export default function Home() {
  const Images = {
    src: [
      "/../public/Images/place/inside1.webp",
      "/../public/Images/place/inside2.webp",
      "/../public/Images/place/inside3.webp",
      "/../public/Images/place/houseOutside.webp",
      "/../public/Images/KoselaErika/beaPlace1.webp",
      "/../public/Images/KoselaErika/beaPlace2.webp",
      "/../public/Images/KoselaErika/beaPlace3.webp",
      ],
      ImageAlts : [
        "Belső kép a szalonról, váró részleg.",
        "Belső kép a szalonról, fodrász részleg.",
        "Belső kép a szalonról, körmös részleg.",
        "A szalonról egy külső fotó.",
        "Egy kép a kozmetikai helyiségről és a kezelőágyról.",
        "Egy kép a kozmetikai helyiségről és a kezelőágyról, ajtó felöli szemszögből.",
        "Teljes kép a kozmetikai helyiségről.",
        ]
  } 
  
  return (
   <>
   <Hero/>
   <Description/>
   <Staff/>
   <Gallery hasJob={false} Images={Images}/>
   <Contact/>
   </>
  )
}
