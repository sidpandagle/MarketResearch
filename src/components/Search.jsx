import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../constants'
import { categoriesWithIcon } from '../constants'

export default class Search extends Component {
    render() {
        return (
            // <div className={`mx-auto h-[90vh] bg-cover bg-bottom flex justify-center items-center`} style={{ backgroundImage: `url(/world-background.jpg)` }}>
            // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-to-bl from-blue-900 to-blue-500 text-white`}>
            // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-0 text-white`}>
            // <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient-45 text-white`}>
            <div className={`mx-auto py-12 bg-cover bg-bottom flex justify-center items-center bg-gradient text-white`}>
                <div className='flex flex-col gap-8 text-center md:gap-8 md:w-3/4'>
                    <div className="text-3xl font-semibold md:text-4xl">Navigating Markets, Uncovering Insights</div>
                    <div className='flex justify-center'>
                        <div className="text-sm text-center md:w-3/5 md:text-lg">In markets' complexity, we're your compass, unveiling vital insights to empower your business in an ever-changing world</div>
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
                    <div className='grid items-start justify-center w-full grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-12 min-h-20'>
                        {categoriesWithIcon.map(({ name, icon }, index) => (
                            <Link key={index} to={`/category/${name}`}>
                                <div className='flex flex-col items-center gap-1 mb-2'>
                                    <img src={icon} alt='category-icon' className="flex justify-center w-6 duration-100 hover:scale-125"></img>
                                    <div className="text-center mx-1 text-[10px] w-20">{name}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}