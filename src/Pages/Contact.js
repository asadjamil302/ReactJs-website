import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Contactform from '../components/Contactpage/Contactform'
import Googlemap from '../components/Contactpage/Googlemap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



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
