import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div className='text-white bg-gradient'>
                <div className="max-w-6xl px-4 mx-auto sm:px-6">
                    <div className="pt-12 md:py-12 md:pt-10">
                        <div className="pb-12 mx-auto text-center md:pb-0">
                            <h2 className="mb-6 text-3xl font-extrabold text-white">Discover Our Services</h2>

                            <div className='flex justify-center mb-2 text-sm text-slate-300'>
                                <div className='w-4/5 md:w-1/2'>
                                    Lorem ipsum dolor, sit amet amet amet consectetur adipisicing elit. Natus id minima rem magni doloremque
                                </div>
                            </div>

                            <div className='flex flex-col flex-wrap justify-between md:gap-0 md:flex-row'>
                                {[...(new Array(6))].map((res, i) => {
                                    return (
                                        <div key={i} className="p-4 md:w-1/3">
                                            <div className="w-full text-left rounded-md md:flex">
                                                <div className='flex items-start justify-center md:p-4 '>
                                                    {/* <div className="bg-tertiary w-[36px]  h-[36px] rounded-full md:p-0 text-slate-400">

                                                    </div> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                        <path d="M3.6 15h10.55" />
                                                        <path d="M6.551 4.938l3.26 10.034" />
                                                        <path d="M17.032 4.636l-8.535 6.201" />
                                                        <path d="M20.559 14.51l-8.535 -6.201" />
                                                        <path d="M12.257 20.916l3.261 -10.034" />
                                                    </svg>


                                                </div>
                                                <div className="relative flex flex-col justify-between flex-grow gap-2 p-4 text-center md:w-3/5 md:text-left">
                                                    <div className='text-lg font-semibold'>
                                                        13th October 2023
                                                    </div>
                                                    <div className='mb-2 text-sm text-slate-300'>
                                                        Lorem ipsum dolor, sit amet amet amet consectetur adipisicing elit. Natus id minima rem magni doloremque
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
