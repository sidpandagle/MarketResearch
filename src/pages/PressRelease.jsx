import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { apiUrl, categories } from '../constants';
import moment from 'moment';


export default function PressRelease() {
    const { pressReleaseId } = useParams();
    const [pressRelease, setPressRelease] = useState({});


    useEffect(() => {
        axios.get(`${apiUrl}/press_release/${pressReleaseId}`)
            .then((res) => {
                setPressRelease(res.data.data);
            })
    }, [])

    const heading = 'Global Cassava Starch Market To Grow At A CAGR Of 5.5% By 2030'
    return (
        <div>
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <nav className="flex pt-8 pb-4" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link to='/'>
                                <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                </svg>
                                <Link to={`/all-press-release/${categories.find(res => res.name === pressRelease.category)?.id}`}>
                                    <div className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 ">{pressRelease.category}</div>
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 ">{pressRelease.title}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="py-2 text-center md:pt-2 md:text-left">
                    <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                        <div className='md:flex'>
                            <div className="w-full">
                                <div className='relative border rounded-lg shadow-lg'>
                                    <div className='absolute top-[-10px] right-[20px] text-xs md:text-sm lg:text-md py-1 px-4 bg-primary text-white rounded-sm'>
                                        {moment(pressRelease.created_date).format('Do MMM YYYY')}
                                    </div>

                                    <div className="px-4 py-6 mb-2 text-xl font-semibold bg-[#2C3E50] text-white rounded-lg shadow-sm">
                                        {pressRelease.title}
                                    </div>
                                    <div className='flex flex-col gap-2 p-4 py-2'>
                                        <div dangerouslySetInnerHTML={{ __html: pressRelease.description }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
