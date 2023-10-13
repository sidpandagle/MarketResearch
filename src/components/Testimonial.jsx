
import React, { Component, useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import 'swiper/css';


export default function Testimonial() {

    const [my_swiper, set_my_swiper] = useState({});
    const swiper = useSwiper();

    const [selectedTestimonial, setSelectedTestimonial] = useState(0);

    const testimonials = [
        { name: 'Mark Zuckerberg', selected: selectedTestimonial === 0 },
        { name: 'Peter Theil', selected: selectedTestimonial === 1 },
        { name: 'Elon Musk', selected: selectedTestimonial === 2 },
    ]

    const changeSlider = (index) => {
        setSelectedTestimonial(index);
        my_swiper.slideTo(index);
    }

    return (
        <div className='max-w-6xl pt-12 mx-auto md:pt-10 sm:px-6'>
            <div className='mb-4 text-3xl font-extrabold text-center text-slate-600'>Testimonials</div>
            <div className="items-center justify-center md:flex">
                <div className="mx-4 my-8 md:m-4 md:w-1/3">
                    {testimonials.map((testimonial, index) =>
                        <div key={index} onClick={() => { changeSlider(index) }} className={`flex items-center gap-4 mb-4 duration-500 border border-b-4 rounded-md shadow-sm hover:shadow-xl cursor-pointer ${testimonial.selected && 'border-b-primary'}`}>
                            <div className="m-2 rounded-full h-14 w-14 bg-slate-300"></div>
                            <div>
                                <div>{testimonial.name}</div>
                                <div>CEO</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='md:w-1/2'>
                    <Swiper
                        onInit={(ev) => {
                            set_my_swiper(ev)
                        }}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log('swiper')}
                    >

                        {testimonials.map((testimonial, index) =>
                            <SwiperSlide key={index}> <div className="flex flex-col gap-1 m-4 text-center md:text-left">
                                <div className="text-xl font-bold">This is really good.</div>
                                <div className="italic">-{testimonial.name}</div>
                                <div className='py-2'>Rating</div>
                                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dicta ratione est inventore veritatis voluptatibus quidem similique eos itaque corrupti maxime praesentium ipsa, officia autem nobis nemo debitis illo vero.</div>
                            </div></SwiperSlide>
                        )}
                    </Swiper>
                </div>

            </div>
        </div>
    )

}
