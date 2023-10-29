import React, { useEffect, useState } from 'react'
import BuyNowForm from '../components/BuyNowForm'
import { useParams } from 'react-router-dom'
import { licenses } from '../constants';

export default function BuyNow() {
    const { reportId, buyId } = useParams();
    const [license, setLicense] = useState({});
    useEffect(() => {
        setLicense(licenses.find(res => res.id === Number(buyId)))
    })

    return (
        <>
            <div className="p-4 mx-auto max-w-7xl sm:px-6">
                <div className="py-2 text-center md:pt-2 md:text-left">
                    <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                        <div className='flex flex-col gap-4 md:flex-row'>
                            <div className="border rounded-md md:w-2/5">
                                <div className='relative p-4'>
                                    <div className="mb-2 text-xl font-semibold">Order Summary</div>
                                    <div className='flex flex-col justify-between py-2'>
                                        <div>
                                            <div className='gap-4 md:flex'>
                                                <div className='flex items-center justify-center w-32 font-semibold text-white rounded-md bg-slate-500'>
                                                    Report
                                                </div>
                                                <div>
                                                    <div className='font-semibold'>
                                                        Global Cassava Starch Market To Grow At A CAGR Of 5.5% By 2030
                                                    </div>
                                                    <div className='flex justify-center pt-2 text-sm md:justify-normal'>
                                                        <div className='pr-4 border-r-2 border-slate-300'>
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
                                            <div className='flex flex-col pt-4 pb-20'>
                                                <div className='px-4 py-3 border-b-2'>
                                                    Selected License
                                                </div>
                                                <div className='flex justify-between px-4 py-3 border-b-2'>
                                                    <div>
                                                        {license.license}
                                                    </div>
                                                    <div className='font-bold'>
                                                        {license.price}
                                                    </div>
                                                </div>
                                                <div className='flex justify-between px-4 py-3'>
                                                    <div>
                                                        Total <span className='text-xs'>(Inclusive of all taxes)</span>
                                                    </div>
                                                    <div className='font-bold text-primary'>
                                                    {license.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='relative flex justify-between gap-3 p-6 border rounded-sm'>
                                                <div className='absolute top-[-8px] text-xs right-0 w-full flex justify-center'>
                                                    <div className='px-4 bg-white'>
                                                        We Accept all major credit cards
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={"/payment-methods.webp"} alt="payments" />
                                                </div>
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
                            <div className="border rounded-md md:w-3/5">
                                <div className='relative p-4'>
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
