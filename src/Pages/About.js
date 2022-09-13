import React from 'react'
import Aboutdescreption from '../components/Aboutpage/Aboutdescreption'
import Aboutprocess from '../components/Aboutpage/Aboutprocess'
import Testimonial from '../components/Aboutpage/Testimonial'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div>
        <Navbar></Navbar>
        <Breadcrumbs PageName="About Us"></Breadcrumbs>
        <Aboutdescreption></Aboutdescreption>
        <Aboutprocess></Aboutprocess>
        <Testimonial></Testimonial>
        <Footer></Footer>

    </div>
  )
}
