import React from 'react'
import BuyNowForm from '../components/BuyNowForm'

export default function BuyNow() {

    return (

        <>
            <div className="p-4 mx-auto max-w-7xl sm:px-6">
                <div className="py-2 text-center md:pt-2 md:text-left">
                    <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                        <div className='flex flex-col gap-4 md:flex-row'>
                            <div className="md:w-2/5">
                                <div className='relative p-4 border rounded-md'>
                                    <div className="mb-2 text-xl font-semibold">Order Summary</div>
                                    <div className='py-2'>
                                        <div className='gap-4 md:flex'>
                                            <div className='w-24 rounded-md bg-slate-500'>

                                            </div>
                                            <div>
                                                <div className='font-semibold'>
                                                    Global Cassava Starch Market To Grow At A CAGR Of 5.5% By 2030
                                                </div>
                                                <div className='flex justify-center pt-2 text-sm md:justify-normal'>
                                                    <div className='pr-4 border-r-2 border-slate-400'>
                                                        <div>Report ID</div>
                                                        <div>TMRGL7878</div>
                                                    </div>
                                                    <div className='pl-4'>
                                                        <div>Category</div>
                                                        <div>Automotive</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-4 text-xs'>Format Type: PDF / WORD / EXCEL / PPT</div>
                                        <div className='mt-44'>
                                            <div className='relative flex justify-between gap-3 p-6 border rounded-sm'>
                                                <div className='absolute top-[-8px] text-xs right-0 w-full flex justify-center'>
                                                    <div className='px-4 bg-white'>
                                                        We Accept all major credit cards
                                                    </div>
                                                </div>
                                                <div className='w-full h-16 p-4 rounded-md bg-slate-200'></div>
                                                <div className='w-full h-16 p-4 rounded-md bg-slate-200'></div>
                                                <div className='w-full h-16 p-4 rounded-md bg-slate-200'></div>
                                                <div className='w-full h-16 p-4 rounded-md bg-slate-200'></div>
                                                <div className='w-full h-16 p-4 rounded-md bg-slate-200'></div>
                                            </div>
                                            <div className='flex items-center justify-center p-4 text-sm'>
                                                <div className='px-3 border-r-2'>Return Policy</div>
                                                <div className='px-3 border-r-2'>Terms & Conditions</div>
                                                <div className='px-3'>Privacy Policy</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/5">
                                <div className='relative p-4 border rounded-md'>
                                    <div className='flex flex-col gap-2 '>
                                        <BuyNowForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
