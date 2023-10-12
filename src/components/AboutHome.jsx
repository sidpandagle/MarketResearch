import React, { Component } from 'react'

export default class AboutHome extends Component {
  render() {
    return (
      <div className='max-w-6xl py-12 mx-auto md:pt-10 sm:px-6'>
        <div className="mb-8 text-3xl font-extrabold text-center text-slate-600">About Us</div>
        <div className="flex">
          <div className="w-1/2">
            <div className="text-xl font-semibold">Drive More ROI with Customized Solutions</div>
            <div className='w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, exercitationem accusantium! Exercitationem illo aperiam facere animi deleniti libero odit quae veritatis, possimus iure ad vitae nihil? Ipsam eveniet atque deleniti.</div>
          </div>
          <div className="w-1/2 p-4">
            Image
          </div>
        </div>
      </div>
    )
  }
}
