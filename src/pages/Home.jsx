import React, { Component } from 'react'
import Search from '../components/Search'
import Testimonial from '../components/Testimonial'
import Clients from '../components/Clients'
import AboutHome from '../components/AboutHome'

export default class Home extends Component {
  render() {
    return (

      <section className="relative">
        <Search />
        {/* <AboutHome /> */}
        <Testimonial />
        <Clients />
      </section>
    )
  }
}
