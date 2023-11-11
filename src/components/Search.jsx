import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../constants'
import { useNavigate } from "react-router-dom";

export default function Search() {
    const navigate = useNavigate();
    const [triple, setTriple] = useState(0);
    const [keyword, setKeyword] = useState('');
    const redirectToReportList = () => {
        setTriple(triple + 1)
        if (triple === 2) {
            navigate('/report/list')
        }
    }
    const redirectToPressReleaseList = () => {
        setTriple(triple + 1)
        if (triple === 2) {
            navigate('/press-release/list')
        }
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${keyword}`)
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
                    <div className="text-sm text-center md:w-5/6 md:text-lg" onClick={redirectToPressReleaseList}>Empower your business with data-driven strategies. Discover trends, analyze markets, and seize opportunities for sustainable success. Explore limitless possibilities today!</div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex justify-between overflow-hidden bg-white rounded-lg md:w-1/2 focus-within:shadow-lg'>
                        <div className="flex items-center h-12 ">
                            <div className="grid w-12 h-full text-gray-300 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                className="h-full pr-2 text-gray-700 outline-none w-[100px] text-xs  md:text-sm md:w-[400px]"
                                type="text"
                                id="search"
                                value={keyword}
                                onKeyDown={handleSearch}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="Search something.." />
                        </div>
                        {/* <button className='px-8 m-1 text-sm font-bold tracking-wide text-white rounded-md bg-primary'>Search</button> */}
                        <Link to={`/search/${keyword}`}>
                            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 m-1 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md md:px-8 hover:bg-indigo-600 focus:outline-none focus:ring-1 ">
                                Search
                            </button>
                        </Link>

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
                            <div className='flex flex-col items-center gap-1 mb-2 duration-200 hover:scale-125 hover:font-semibold'>
                                <img src={res.icon} alt='category-icon' className="flex justify-center w-6 duration-100 "></img>
                                <div className="text-center mx-1 text-[8px] md:text-[10px] w-20">{res.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}