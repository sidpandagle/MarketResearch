import React, { Component } from 'react'

export default class Insights extends Component {
    render() {

        return (
            <div className="max-w-6xl px-4 py-8 mx-auto md:pt-10 sm:px-6">
                <div className="max-w-4xl mx-auto text-center md:pb-10">
                    <h2 className="mb-6 text-3xl font-extrabold text-slate-600">Insights</h2>
                    <h2 className="text-xl font-semibold mb-14">Numbers tell the story; our data fuels your business growth.</h2>
                    <div className='flex flex-col justify-between gap-10 md:gap-0 md:flex-row'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>1000<span className='text-4xl text-blue-500'>+</span></div>
                            <div className='text-sm font-semibold'>Reports Published</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>250<span className='text-4xl text-blue-500'>+</span></div>
                            <div className='text-sm font-semibold'>Clients Served</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>50<span className='text-4xl text-blue-500'>+</span></div>
                            <div className='text-sm font-semibold'>Consulting Projects <br /> per Month</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>35<span className='text-4xl text-blue-500'>%</span></div>
                            <div className='text-sm font-semibold'>Repeat Customers</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-5xl font-bold'>200<span className='text-4xl text-blue-500'>+</span></div>
                            <div className='text-sm font-semibold'>Analyst Hours <br /> per Report</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
