import React from 'react'
import { Link } from "react-router-dom";


/**
 * It returns a div that contains a header with a navbar.
 * @returns A React component.
 */
export default function Navbar() {
/* Rendering the header component. */
  return (
    <div>
        <header className="header-style3 header-custom">

            <div id="top-bar" className="bg-primary d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-xs-12">
                            <div className="top-bar-info">
                                <ul className="list-unstyled">
                                    <li className="border-right text-white"><i className="fas fa-mobile-alt text-white"></i>(+123) 456 7890</li>
                                    <li className="border-right text-white"><i className="fas fa-envelope text-white"></i>addyour@emailhere</li>
                                    <li className="text-white"><i className="far fa-clock text-white"></i>8:00am - 7:00pm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div>
                                <ul className="top-social-icon mb-0">
                                    <li>
                                        <a href="#!"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-default">

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="menu_area alt-font">
                                <nav className="navbar navbar-expand-lg navbar-light p-0 d-flex justify-content-between">

                                    <div className="navbar-header navbar-header-custom">

                                        <a href="#!" className="navbar-brand xs-width-145px d-inline-block mr-lg-0"><Link to="/"><img id="logo" src="img/logos/logo.png" alt="logo" /></Link></a>

                                    </div>

                                    <div className="navbar-toggler"></div>


                                    <ul className="navbar-nav ml-auto" id="nav">
                                        <li><Link className='nav-link' to="/">Home</Link></li>
                                        <li><Link className='nav-link' to="/about">About Us</Link></li>
                                        <li><a href="#!">Services</a></li>
                                        <li><Link className='nav-link' to="/contact">Contact Us</Link></li>
                                    </ul>

                                    <div className="attr-nav">
                                        <ul>
                                            
                                            <li className="ml-2">
                                                <a href="#appointment" className="butn appointment">
                                                    <i className="far fa-calendar-plus mr-1 align-middle display-28"></i> <span className="alt-font align-middle d-none d-xxl-inline-block">Book Appoinment</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="appointment" className="mfp-hide appointment-popup bg-white border border-width-10">

                <h3 className="mt-n3 mb-1-6 h4">Book Appoinment</h3>

                <form className="quform" action="https://septosha.websitelayout.net/quform/book-appointment.php" method="post" enctype="multipart/form-data" onclick="">
                    <div className="quform-elements">

                        <div className="row">

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <input className="form-control" id="name" type="text" name="name" placeholder="First Name" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <input className="form-control" id="last_name" type="text" name="last_name" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone number" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <input className="form-control" id="email" type="text" name="email" placeholder="Your email" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <input className="form-control date form_date" data-date-format="dd MM yyyy" data-link-format="yyyy-mm-dd" size="16" type="text" id="date" name="date" value="" placeholder="Appoinment date" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <input className="form-control date form_time" data-date="" data-date-format="hh:ii" data-link-format="hh:ii" size="16" type="text" id="time" name="time" value="" placeholder="Appoinment time" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <select className="form-control form-select" id="department" name="department">
                                            <option value="">-- Select Department --</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Gynecology">Gynecology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Orthopedics">Orthopedics</option>
                                            <option value="Pulmonology">Pulmonology</option>
                                            <option value="Gastrology">Gastrology</option>
                                            <option value="Urology">Urology</option>
                                            <option value="Laboratory">Laboratory</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <select className="form-control form-select" id="doctors" name="doctors">
                                            <option value="">-- Choose Your Doctor --</option>
                                            <option value="Jama Karle">Jama Karle</option>
                                            <option value="Keir Prestonly">Keir Prestonly</option>
                                            <option value="Finley Walkeror">Finley Walkeror</option>
                                            <option value="Dont know">Dont know</option>
                                        </select>
                                    </div>
                                </div>

                            </div>


                            <div className="col-md-12">
                                <div className="quform-element form-group">
                                    <div className="quform-input">
                                        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="quform-submit-inner text-center">
                                    <button className="butn w-100" type="submit"><span>Submit Now</span></button>
                                </div>
                                <div className="quform-loading-wrap"><span className="quform-loading"></span></div>
                            </div>


                        </div>

                    </div>
                </form>
            </div>

        </header>
    </div>
  )
}


