/* Importing the React library and the components that are used in the About.js file. */
import React from 'react'
import Aboutdescreption from '../components/Aboutpage/Aboutdescreption'
import Aboutprocess from '../components/Aboutpage/Aboutprocess'
import Testimonial from '../components/Aboutpage/Testimonial'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

/**
 * It returns a div that contains a Navbar, Breadcrumbs, Aboutdescreption, Aboutprocess, Testimonial,
 * and Footer component.
 * @returns A React element.
 */
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
