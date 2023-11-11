import React from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Clients() {

  return (
    <div className="max-w-6xl px-4 py-12 mx-auto md:pt-10 sm:px-6">
      <div className="">
        {/* Section header */}
        <div className="max-w-3xl pb-12 mx-auto text-center md:pb-4">
          <h2 className="mb-8 text-3xl font-extrabold text-slate-600">Our Clients</h2>
          <h2 className="mb-4 h2">Trusted by over 500 companies all over the world</h2>
          <p className="text-xl text-gray-600" data-aos="zoom-y-out">Trusted by industry leaders, our insights drive success, empowering businesses to thrive in dynamic market landscapes with precision.</p>
        </div>

        {/* <Swiper className='grayscale' */}
        <Swiper 
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 5
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log('swiper')}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={20000}
          loop={true}
          slidesPerView={5}
          slidesPerGroup={5}
        >
          {/* Items */}
          <div className="">
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/basf.jpeg'} alt="basf" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/total.jpeg'} alt="total" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/pfizer.jpeg'} alt="pfizer" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/atos.jpeg'} alt="atos" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/sanofi.jpeg'} alt="sanofi" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">

                <img className='pointer-events-none' src={'/logos/microsoft.jpeg'} alt="microsoft" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/hcl.jpeg'} alt="hcl" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/nestle.jpeg'} alt="nestle" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/vmware.jpeg'} alt="vmware" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-48 h-44">
                <img className='w-24 pointer-events-none' src={'/logos/randstad.jpeg'} alt="randstad" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>






      </div>
    </div >
  )
}
