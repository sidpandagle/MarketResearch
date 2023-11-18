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
    <div className="py-12 mx-auto md:py-10">
      <div className="">
        {/* Section header */}
        <div className="max-w-3xl pb-12 mx-8 md:mx-auto  text-center md:pb-4">
          <h2 className="mb-8  text-3xl font-extrabold text-slate-600">Our Clients</h2>
          <h2 className="mb-4  h2">Trusted by over 500 companies all over the world</h2>
          <p className="md:text-xl  text-gray-600" data-aos="zoom-y-out">Trusted by industry leaders, our insights drive success, empowering businesses to thrive in dynamic market landscapes with precision.</p>
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
              slidesPerView: 4,
            },
            865: {
              slidesPerView: 6
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log('swiper')}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={20000}
          loop={true}
          slidesPerView={6}
          slidesPerGroup={6}
        >
          {/* Items */}
          <div className="mt-0 md:mt-8">
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/basf.png'} alt="basf" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/total.png'} alt="total" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/pfizer.png'} alt="pfizer" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/atos.png'} alt="atos" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/sanofi.png'} alt="sanofi" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">

                <img loading="lazy" className='pointer-events-none' src={'/client_logos/microsoft.png'} alt="microsoft" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/hcl.png'} alt="hcl" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/nestle.png'} alt="nestle" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/vmware.png'} alt="vmware" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Item */}
              <div className="flex items-center justify-center w-56 h-24">
                <img loading="lazy" className='w-24 pointer-events-none' src={'/client_logos/ranstad.png'} alt="randstad" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>






      </div>
    </div >
  )
}
