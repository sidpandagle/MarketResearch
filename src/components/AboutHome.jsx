import React, { Component } from 'react'

export default class AboutHome extends Component {
  render() {
    return (
      <div className='py-12 text-white bg-gradient'>
        <div className='max-w-6xl mx-auto sm:px-6'>
          <div className="mb-10 text-3xl font-extrabold text-center ">About Us</div>
          <div className="items-center text-center md:text-left md:flex">
            <div className="md:w-1/2">
              <div className="mb-4 text-2xl font-semibold">Lorem ipsum dolor sit </div>
              <div className='flex flex-col gap-4 text-sm md:w-3/4'>
                <div className='px-8 md:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className='px-8 md:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className='px-8 md:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className='px-8 md:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
              </div>
            </div>
            <div className="p-10 pb-0 md:p-0 md:w-1/2">
              <img className='w-full rounded-lg brightness-200' src={'/gray-back.png'} alt="about-img" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
