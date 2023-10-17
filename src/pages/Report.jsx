import React, { Component, useState } from 'react'
import ReportTabs from '../components/ReportTabs'
import Inquiry from '../components/Inquiry'

export default function Report() {

  const [selectedTitle, setSelectedTitle] = useState('Description');
  return (
    <div className='px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-0 sm:px-6'>

      <div className="py-8 md:flex">
        <div className="p-4 mb-4 border rounded-md md:mb-0 md:w-3/4">
          <div className="head">
            <div> Congruence / Report / Information & Communication Technology / Workforce Analytics Market</div>
            <div className='items-center justify-between md:flex'>
              <div className="w-full">
                <div className='mt-4 mb-2 text-lg font-semibold'>Workforce Analytics Market Size, Share & Segmentation By Component (Solution, Service), By Organization Size (Large Enterprises, SMEs), By Deployment (On-Premise, Cloud), By Industry Vertical (BFSI, Manufacturing, Healthcare, Government, Retail, IT and Telecom, Education, Others), By Region and Global Forecast 2023-2030</div>
                <div className='gap-4 py-4 text-sm text-center md:py-0 md:text-left md:flex'>
                  <div>Date: September 2023</div>
                  <div>Report Code: SNS/ICT/3982</div>
                  <div>Pages: 138</div>
                </div>
                <div className="justify-between gap-1 my-4 md:flex">
                  <div onClick={() => setSelectedTitle('Description')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-center border rounded-sm cursor-pointer  ${selectedTitle === 'Description' ? 'font-bold bg-slate-500 text-white' : ''}`}>Description</div>
                  <div onClick={() => setSelectedTitle('Table')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-center border rounded-sm cursor-pointer  ${selectedTitle === 'Table' ? 'font-bold bg-slate-500 text-white' : ''}`}>Table Of Content</div>
                  <div onClick={() => setSelectedTitle('Methodology')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-center border rounded-sm cursor-pointer  ${selectedTitle === 'Methodology' ? 'font-bold bg-slate-500 text-white' : ''}`}>Methodology</div>
                  <div onClick={() => setSelectedTitle('Request')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-center border rounded-sm cursor-pointer  ${selectedTitle === 'Request' ? 'font-bold bg-slate-500 text-white' : ''}`}>Request Sample</div>
                </div>
                <div className={`py-4 flex justify-center h-[500vh] ${selectedTitle !== 'Description' && 'hidden'}`}>Description</div>
                <div className={`py-4 flex justify-center h-[500vh] ${selectedTitle !== 'Table' && 'hidden'}`}>Table</div>
                <div className={`py-4 flex justify-center h-[500vh] ${selectedTitle !== 'Methodology' && 'hidden'}`}>Methodology</div>
                <div className={`py-4 ${selectedTitle !== 'Request' && 'hidden'}`}>
                  <Inquiry />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:pl-4 md:w-1/4">
          <div className='sticky top-[20px] flex flex-col gap-4 '>
            <div className='flex flex-col gap-2 p-4 border rounded-md'>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  Single User License</div>
                <div>$4650</div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  Enterprise User License</div>
                <div>$6450</div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  Excel Datasheet</div>
                <div>$2325</div>
              </div>
              <div className='flex flex-col gap-2 mt-2'>
                {/* <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Buy Now</button>
                <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Inquiry Before Buying</button> */}
                <button type="button" className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Buy Now
                </button>
                <button type="button" className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                Inquiry Before Buying
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2 border rounded-md'>
              <div>
                <div className='px-4 py-2'>Related Reports</div>
                <div className=''>
                  <div className='flex flex-col px-4 py-2 border-b-2 cursor-pointer group hover:bg-slate-100'>
                    <div className="font-bold group-hover:text-primary">Workforce Analytics Market</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse  ipsum dolor sit amet consectetur adipisicing elit. Esse</div>
                  </div>
                  <div className='flex flex-col px-4 py-2 border-b-2 cursor-pointer group hover:bg-slate-100'>
                    <div className="font-bold group-hover:text-primary">Workforce Analytics Market</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse  ipsum dolor sit amet consectetur adipisicing elit. Esse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
