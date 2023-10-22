import React, { Component, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Link } from 'react-router-dom';

export default function LatestReports() {


    const [my_swiper, set_my_swiper] = useState({});
    const swiper = useSwiper();

    return (
        <div className='bg-gradient'>
            <div className="max-w-6xl py-12 mx-auto text-white md:pt-10 sm:px-6">
                <div className='mb-8 text-3xl font-extrabold text-center'>Latest Reports</div>
                <div className="flex items-center justify-between mt-6">
                    <div className="prev" onClick={() => { my_swiper.slidePrev() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-left-filled" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth={0} fill="currentColor" />
                        </svg>

                    </div>
                    <Swiper
                        onInit={(ev) => {
                            set_my_swiper(ev)
                        }}
                        slidesPerView={2}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                            639: {
                                slidesPerView: 2,
                            },
                            865: {
                                slidesPerView: 2
                            },
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log('swiper')}
                    >

                        {['', '', '', '', '', '', '', '', '', '', '', ''].map((val, index) =>
                            <SwiperSlide key={index}>
                                <div className="mx-2 border rounded-md md:flex overflow-clip">
                                    <div className="p-20 bg-white md:w-2/5 md:p-0 text-slate-400">

                                    </div>
                                    <div className="p-4 text-sm md:w-3/5">
                                        <div>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus id minima rem magni doloremque, accusamus repudiandae in eum dolores sit quia ea doloribus unde eveniet ullam veritatis. Eveniet, facilis dolore.
                                        </div>
                                        <div className='flex justify-center md:justify-end'>
                                            <Link to='/report'>
                                            <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                Read Me
                                            </button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className="ml-2" onClick={() => { my_swiper.slideNext() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right-filled" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6f32be" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" strokeWidth={0} fill="currentColor" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )

}
