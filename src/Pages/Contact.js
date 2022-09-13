/* Importing the React library and the components that are used in the Contact component. */
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Contactform from '../components/Contactpage/Contactform'
import Googlemap from '../components/Contactpage/Googlemap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



/**
 * It returns a div that contains a Navbar, Breadcrumbs, Contactform, Googlemap, and Footer component.
 * @returns A React element.
 */
export default function Contact() {
  return (
    <div>
        <Navbar></Navbar>
        <Breadcrumbs PageName="Contact Us"></Breadcrumbs>
        <Contactform></Contactform>
        <Googlemap></Googlemap>
        <Footer></Footer>
    </div>
  )
}
