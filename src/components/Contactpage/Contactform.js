import React from 'react'

export default function Contactform() {
  return (
    <div>
        <section>
            <div className="container">

                <div className="mb-5 text-center">
                    <h2 className="text-primary mb-3">Get in Touch</h2>
                    <p className="mx-auto mb-0 w-95 w-md-80 w-lg-60 w-xl-50">We are available 24/7 by e-mail and phone. You can also ask a question about our services through our contact form that we regularly provide.</p>
                </div>

                <div className="row box-shadow g-0 rounded mb-6">
                    <div className="col-lg-6 col-xl-5 mb-1-9 mb-md-0 d-none d-lg-block">
                        <div className="pr-lg-4 bg-img cover-background rounded-left h-100 contactPage" data-overlay-dark="0" data-background="img/bg/contact-bg.jpg">
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7">
                        <div className="p-4 p-sm-5">
                            <form className="quform" action="https://septosha.websitelayout.net/quform/contact.php" method="post" enctype="multipart/form-data" onclick="">

                                <div className="quform-elements">

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="name">Your Name <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="email">Your Email <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="subject">Your Subject <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="phone">Contact Number</label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                                </div>
                                            </div>

                                        </div>
 
                                        <div className="col-md-12">
                                            <div className="quform-element form-group">
                                                <label for="message">Message <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <textarea className="form-control" id="message" name="message" rows="3" placeholder="Tell us a few words"></textarea>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-12">
                                            <div className="quform-submit-inner">
                                                <button className="butn theme butn-md" type="submit"><span>Send Message</span></button>
                                            </div>
                                            <div className="quform-loading-wrap text-left"><span className="quform-loading"></span></div>
                                        </div>


                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-1-9 mb-lg-0">
                        <div className="bg-light border border-width-5 text-center py-2-0 px-3">
                            <div className="mb-3">
                                <i className="fas fa-map-marker-alt text-primary display-18"></i>
                            </div>
                            <h3 className="text-dark text-uppercase font-weight-600 h6 mb-2">Visit Our Office</h3>
                            <p className="mx-auto mb-0">74 Guild Street 542B,
                                <br />Great North Town MT.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-1-9 mb-lg-0">
                        <div className="bg-light border border-width-5 text-center py-2-0 px-3">
                            <div className="mb-3">
                                <i className="fas fa-comments text-primary display-18"></i>
                            </div>
                            <h3 className="text-dark text-uppercase font-weight-600 h6 mb-2">Let's Talk</h3>
                            <p className="mx-auto mb-0">Phone: (+44) 123 456 789
                                <br/>Fax: 123 456 789</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-light border border-width-5 text-center py-2-0 px-3">
                            <div className="mb-3">
                                <i className="fas fa-envelope text-primary display-18"></i>
                            </div>
                            <h3 className="text-dark text-uppercase font-weight-600 h6 mb-2">E-mail Us</h3>
                            <p className="mx-auto mb-0"><a href="#!">info@yourdomain.com</a>
                                <br/><a href="#!">hr@yourdomain.com</a></p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    </div>
  )
}
