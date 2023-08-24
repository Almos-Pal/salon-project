'use client'
import Image from "next/image";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface GalleryProps {
  hasJob: boolean;
  Images: {src: string[]; ImageAlts : string[]};
}

const Gallery: React.FC<GalleryProps> = ({ hasJob, Images }) => {


  
  return (
    <section id="Gallery" className="bg-white flex flex-col justify-between items-center gap-10 lg:pt-32 pb-10 md:h-[40rem]">
      <h1 className="text-3xl font-black py-10 xl:text-6xl 3xl:text-8xl 3xl:pt-32">{hasJob? "Munkáim":"Galéria"}</h1>
      <div className="w-full  relative ">
      
      <Swiper className="w-full sm:w-3/4  md:h-[25rem] lg:w-1/2 xl:w-3/8 xl:h-[29rem] 2xl:2/8 2xl:h-[35rem] 3xl:1/8 3xl:h-[45rem] h-80 swiper "
      slidesPerView={1}
      loop={true}
       autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
    
      
    >

  {Images.src.map((src,index) => (
    <SwiperSlide key={src}>
      <Image src={src} alt={Images.ImageAlts[index]} layout="fill"/>
    </SwiperSlide>
      ))}
    
      
    </Swiper>
        
       
      </div>
    </section>
  );
}
export default Gallery;
