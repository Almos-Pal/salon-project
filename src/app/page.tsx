import Hero from '../components/home/Hero'
import Description from '../components/home/Descriptoin'
import Staff from '../components/home/Staff'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'



export default function Home() {
  const Images = {
    src: [
      "/Images/place/inside1.webp",
      "/Images/place/inside2.webp",
      "/Images/place/inside3.webp",
      "/Images/place/houseOutside.webp",
      "/Images/KoselaErika/beaPlace1.webp",
      "/Images/KoselaErika/beaPlace2.webp",
      "/Images/KoselaErika/beaPlace3.webp",
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
