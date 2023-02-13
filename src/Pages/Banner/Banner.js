import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import banner from '../../Images/banner.jpg'
import banner2 from '../../Images/vFfKtYvYCsBVYIobKYsffb60Px8AWUD5DvLh9hZv.webp'
import banner3 from '../../Images/bb2.webp'
import '../Banner/Banner.css'


const Banner = () => {
  
    return (
        <div className='container banner-part'>
            <div>
            <Swiper 
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                  }}
                mousewheel={true}
                keyboard={true}
                autoplay ={true}
                className="mySwiper">
             <SwiperSlide>
                 <div className='slider'>
                     <img src={banner2} alt=''/>
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className='slider'>
                     <img src={banner2} alt=''/>
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className='slider'>
                     <img src={banner3} alt=''/>
                 </div>
             </SwiperSlide>
             
            </Swiper> 
            </div>
            <div className='row second-banner mt-4'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    {/* Islamic Book */}
                    <img src='https://boiferry.com/assets/images/redactor/TRzp2H4kNG4i3DsuX50G2zRFPcLiTRasCr2VXORA.webp' alt=''/>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    {/* top selling Book */}
                    <img src='https://boiferry.com/assets/images/redactor/TRzp2H4kNG4i3DsuX50G2zRFPcLiTRasCr2VXORA.webp' alt=''/>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    {/* Programming Book */}
                    <img src='https://boiferry.com/assets/images/redactor/TRzp2H4kNG4i3DsuX50G2zRFPcLiTRasCr2VXORA.webp' alt=''/>
                </div>
               
            </div>
        </div>
    );
};


export default Banner;