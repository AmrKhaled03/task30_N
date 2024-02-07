import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import"../App.css";
import img1 from "../imgs/g1.jpeg";
import img2 from "../imgs/g2.jpeg";
import img3 from "../imgs/g3.jpeg";
import img4 from "../imgs/g4.jpeg";
import img5 from "../imgs/g5.jpeg";
import img6 from "../imgs/g6.jpeg";


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Swipe = () => {
  const gallerys=[
    {
      img:img1,
      title:"cake",
    },
    {
      img:img2,
      title:"cake",
    },
    {
      img:img3,
      title:"cake",
    },
    {
      img:img4,
      title:"cake",
    },
    {
      img:img5,
      title:"cake",
    },
    {
      img:img6,
      title:"cake",
    }
  ]
  return (
   <div className="swiper py-5 w-100 ">
    <div className="container">
    <div className="row">
    <div className="col-12">
    <h1 className="special-heading">
                  Our Gallery
                </h1>
    </div>
  </div>
    <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper py-5"
      >
        {gallerys.map((gallery,index)=>(
 <SwiperSlide key={index}>
<img src={gallery.img} alt={gallery.title}  className='img-fluid w-100 h-100' />
 </SwiperSlide>
        ))}
       
       
      </Swiper>   
    </div>

   </div>
  )
}

export default Swipe