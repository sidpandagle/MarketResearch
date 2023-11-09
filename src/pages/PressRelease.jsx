import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiUrl } from '../constants';
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
                <div className='py-4'> Congruence / Press Release / {pressRelease.category} / {pressRelease.title}</div>
                <div className="py-2 text-center md:pt-2 md:text-left">
                    <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                        <div className='md:flex'>
                            <div className="w-full">
                                <div className='relative p-4 border rounded-md'>
                                    <div className='absolute top-[-10px] right-[20px] text-xs md:text-sm lg:text-md py-1 px-4 bg-primary text-white rounded-sm'>
                                        {moment(pressRelease.created_date).format('Do MMM YYYY')}
                                    </div>

                                    <div className="mb-2 text-xl font-semibold">
                                        {pressRelease.title}
                                    </div>
                                    <div className='flex flex-col gap-2 py-2'>
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
