import React, { Component } from 'react'
import Search from '../components/Search'
import Testimonial from '../components/Testimonial'
import Clients from '../components/Clients'
import AboutHome from '../components/AboutHome'
import LatestReports from '../components/LatestReports'
import Insights from '../components/Insights'
import LatestPressRelease from '../components/LatestPressRelease'
import Services from '../components/Services'

export default function Home() {
  return (

    <section className="relative" >
      <Search />
      <Insights />
      <LatestReports />
      < LatestPressRelease />
      <Services />
      <Testimonial />
      <AboutHome />
      <Clients />
    </section >
  )
}
