import React, { Component } from 'react'
import ReportTabs from '../components/ReportTabs'

export default class Report extends Component {
  render() {
    return (
      <div className='max-w-6xl px-4 py-12 mx-auto md:pt-10 sm:px-6'>
        <div className="head">
          <div> Congruence / Report / Information & Communication Technology / Workforce Analytics Market</div>
          {/* <div className='py-4 text-3xl '>Workforce Analytics Market</div> */}
          <div className='items-center justify-between md:flex'>
            {/* <div className="w-20 h-24 bg-slate-400"></div> */}
            <div className="w-full md:w-3/4">
              <div className='mt-4 mb-2 text-lg font-semibold'>Workforce Analytics Market Size, Share & Segmentation By Component (Solution, Service), By Organization Size (Large Enterprises, SMEs), By Deployment (On-Premise, Cloud), By Industry Vertical (BFSI, Manufacturing, Healthcare, Government, Retail, IT and Telecom, Education, Others), By Region and Global Forecast 2023-2030</div>
              <div className='gap-4 py-4 text-center md:py-0 md:text-left md:flex'>
                <div>Date: September 2023</div>
                <div>Report Code: SNS/ICT/3982</div>
                <div>Pages: 138</div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <button className='px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full'>Buy Now</button>
              <button className='px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full'>Inquiry Before Buying</button>
            </div>
          </div>
        </div>
        <div className="py-8 md:flex">
          <div className="md:w-2/3">
            <ReportTabs />
          </div>
          <div className="md:pl-4 md:w-1/3">
            <div className='flex flex-col gap-2 p-4 rounded-md bg-slate-200'>
              <div className='flex justify-between'>
                <div className='flex gap-2'><input type="radio" name="price" id="" />Single User License</div>
                <div>$4650</div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-2'><input type="radio" name="price" id="" />Enterprise User License</div>
                <div>$6450</div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-2'><input type="radio" name="price" id="" />Excel Datasheet</div>
                <div>$2325</div>
              </div>
              <div className='flex justify-between mt-2'>
                <button className='px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full'>Buy Now</button>
                <button className='px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full'>Inquiry Before Buying</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
