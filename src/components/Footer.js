import React from 'react'

/**
 * It returns a div that contains a footer element with a class of bg-dark-blue. 
 * 
 * The footer element contains a div with a class of footer-style3 and py-6 py-sm-8. 
 * 
 * The div with a class of footer-style3 contains a div with a class of container. 
 * 
 * The div with a class of container contains a div with a class of row. 
 * 
 * The div with a class of row contains three divs with a class of col-lg-4 mb-2-9 mb-lg-0. 
 * 
 * The first div with a class of col-lg-4 mb-2-9 mb-lg-0 contains an img element with a src of
 * img/logos/logo.png, a class of w-60 w-
 * @returns A React component.
 */
export default function Footer() {
  return (
    <div>
        <footer class="bg-dark-blue">
            <div class="footer-style3 py-6 py-sm-8">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-2-9 mb-lg-0">
                            <img src="img/logos/logo.png" class="w-60 w-sm-40 w-lg-50 mb-1-6" alt="..." />
                            <p class="w-95 w-xl-80 mb-1-6 display-30">Our factor is to offer you and your own hover of family members with the absolute best pleasant of care open.</p>

                            <ul class="social-icon-style1 mb-0 pl-0">
                                <li>
                                    <a href="#!"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-4 mb-2-9 mb-lg-0 ">
                            <h3 class="text-uppercase text-white mb-1-6">Quick Links</h3>
                            <ul class="list-style-1 m-0 list-unstyled">
                                <li>
                                    <span class="d-inline-block align-top pl-1 text-white opacity9">Home</span>
                                </li>
                                <li>
                                    <span class="d-inline-block align-top pl-1 text-white opacity9">About Us</span>
                                </li>
                                <li>
                                    <span class="d-inline-block align-top pl-1 text-white opacity9">Services</span>
                                </li>
                                <li>
                                    <span class="d-inline-block align-top pl-1 text-white opacity9">Contact Us</span>
                                </li>
                            </ul>
                        </div>


                        <div class="col-lg-4 mb-2-9 mb-lg-0">
                            <h3 class="text-uppercase text-white mb-1-6">Contact us</h3>
                            <ul class="list-style-1 m-0 list-unstyled">
                                <li class="mb-2">
                                    <span class="d-inline-block align-top"><i class="ti-location-pin text-primary display-24"></i></span>
                                    <span class="d-inline-block align-top pl-1 text-white opacity9">74 Guild Street 542B, Town MT.</span>
                                </li>
                                <li class="mb-2">
                                    <span class="d-inline-block align-top"><i class="ti-mobile text-primary display-24"></i></span>
                                    <span class="d-inline-block align-top pl-1 text-white opacity9">(+44) 123 456 789</span>
                                </li>
                                <li>
                                    <span class="d-inline-block align-top"><i class="ti-email text-primary display-24"></i></span>
                                    <span class="d-inline-block align-top pl-1 text-white opacity9">addyour@emailhere</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            <div class="py-4 border-top border-color-light-white">
                <div class="container">
                    <div class="text-center">
                        <p class="mb-0 text-white opacity9">&copy; 2022 ReactJs Website is Powered by <a href="#!" target="_blank" class="text-primary text-white-hover">Rana Asad</a></p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
