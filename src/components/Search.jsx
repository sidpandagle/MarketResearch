import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../constants'
import { useNavigate } from "react-router-dom";

export default function Search() {
    const navigate = useNavigate();
    const [triple, setTriple] = useState(0);
    const redirectToReportList = () => {
        setTriple(triple + 1)
        if (triple === 2) {
            navigate('/report/list')
        }
    }
    return (
        // <div className={`mx-auto h-[90vh] bg-cover bg-bottom flex justify-center items-center`} style={{ backgroundImage: `url(/world-background.jpg)` }}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-to-bl from-blue-900 to-blue-500 text-white`}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-0 text-white`}>
        // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-45 text-white`}>
        <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient text-white`}>
            <div className='flex flex-col gap-8 px-4 text-center md:px-16 md:gap-8'>
                <div className="text-3xl font-semibold md:text-4xl" onClick={redirectToReportList}>
                    Navigating Trends, Illuminating Insights
                </div>
                <div className='flex justify-center'>
                    <div className="text-sm text-center md:w-5/6 md:text-lg">Empower your business with data-driven strategies. Discover trends, analyze markets, and seize opportunities for sustainable success. Explore limitless possibilities today!</div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className="flex items-center h-12 overflow-hidden bg-white border rounded-lg md:w-1/2 focus-within:shadow-lg">
                        <div className="grid w-12 h-full text-gray-300 place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            className="w-1/2 h-full pr-2 text-sm text-gray-700 outline-none peer"
                            type="text"
                            id="search"
                            placeholder="Search something.." />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 py-4'>
                    <div className='text-xl text-center'>
                        Browse By Industry
                    </div>
                    <div className='hidden md:block w-1/2 h-[2px] bg-white'>
                    </div>
                </div>
                <div className='grid items-start justify-center w-full grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-14 min-h-20'>
                    {categories.map((res, index) => (
                        <Link key={index} to={`/category/${res.id}`}>
                            <div className='flex flex-col items-center gap-1 mb-2'>
                                <img src={res.icon} alt='category-icon' className="flex justify-center w-6 duration-100 hover:scale-125"></img>
                                <div className="text-center mx-1 text-[8px] md:text-[10px] w-20">{res.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}