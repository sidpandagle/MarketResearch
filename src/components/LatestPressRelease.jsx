import { motion } from 'framer-motion';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LatestPressRelease extends Component {
    render() {
        return (
            <div className="py-12">
                <div className="max-w-6xl px-4 mx-auto sm:px-6">
                    <div className="max-w-4xl mx-auto text-center ">
                        <h2 className="mb-6 text-3xl font-extrabold text-slate-600">Latest Press Release</h2>

                        <div className='flex flex-col flex-wrap justify-between md:gap-0 md:flex-row'>
                            {[...(new Array(6))].map((res, i) => {
                                return (
                                    <div key={i} className="p-4 md:w-1/2">
                                        <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }}>
                                            <div className="text-left border rounded-md md:flex">
                                                <div className='flex items-center justify-center w-2/5'>
                                                    <div className="bg-slate-400 md:w-[140px] md:h-[140px] rounded-lg md:p-0 text-slate-400">
                                                    </div>
                                                </div>
                                                <div className="relative flex flex-col justify-between p-4 text-sm md:w-3/5">
                                                    <div className='font-bold'>
                                                        13th October 2023
                                                    </div>
                                                    <div className='mb-8'>
                                                        Lorem ipsum dolor, sit amet amet amet consectetur adipisicing elit. Natus id minima rem magni doloremque
                                                    </div>
                                                    <div className='absolute bottom-[-10px] right-[20px] flex justify-center md:justify-end'>
                                                        <Link to='/press-release/1'>
                                                            <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                                Read Me
                                                            </button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
