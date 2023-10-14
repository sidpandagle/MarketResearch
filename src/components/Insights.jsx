import React, { Component } from 'react'

export default class Insights extends Component {
    render() {

        return (
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="py-12 md:pt-10">
                    <div className="max-w-4xl pb-12 mx-auto text-center md:pb-10">
                        <h2 className="mb-6 text-3xl font-extrabold text-slate-600">Insights</h2>
                        <h2 className="mb-8 text-2xl h2">Unlocking Market Wisdom: Your Key to Informed Decisions</h2>
                      <div className='flex flex-col justify-between gap-10 md:gap-0 md:flex-row'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>63<span className='text-4xl text-blue-500'>%</span></div>
                            <div className='text-sm font-semibold'>Repeat Customers</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>400<span className='text-4xl text-blue-500'>+</span></div>
                            <div className='text-sm font-semibold'>Client Served</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>40<span className='text-4xl text-blue-500'>K</span></div>
                            <div className='text-sm font-semibold'>New Users Per Week</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>87<span className='text-4xl text-blue-500'>%</span></div>
                            <div className='text-sm font-semibold'>Data Accuracy</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>800<span className='text-4xl text-blue-500'>+</span></div>
                            <div className='text-sm font-semibold'>Billed Hours</div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}
