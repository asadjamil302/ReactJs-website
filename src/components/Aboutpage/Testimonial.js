import React from 'react'

export default function Testimonial() {
  return (
    <div>
        <section>
            <div className="container">
                <div className="mb-5 text-center">
                    <h2 className="text-primary mb-0">What Our Patients Say</h2>
                </div>
                <div className="owl-carousel owl-theme" id="testmonials-carousel">
                    <div className="testmonial-single text-center">
                        <img src="img/avatar/avatar-08.jpg" alt="" className="rounded-circle border" />
                        <span className="h4 align-top d-block pt-4 mb-3"><i className="fas fa-quote-left"></i></span>
                        <p className="mb-4 w-lg-70 mx-auto">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>

                        <h6 className="letter-spacing-1 text-primary">Alivin Corondo</h6>
                        <span className="mb-0 letter-spacing-2">Patient</span>
                    </div>
                    <div className="testmonial-single text-center">
                        <img src="img/avatar/avatar-09.jpg" alt="" className="rounded-circle border" /> 
                        <span className="h4 align-top d-block pt-4 mb-3"><i className="fas fa-quote-left"></i></span>
                        <p className="mb-4 w-lg-70 mx-auto">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>

                        <h6 className="letter-spacing-1 text-primary">Finley Walkeror</h6>
                        <span className="letter-spacing-2">Patient</span>
                    </div>
                    <div className="testmonial-single text-center">
                        <img src="img/avatar/avatar-10.jpg" alt="" className="rounded-circle border" />
                        <span className="h4 align-top d-block pt-4 mb-3"><i className="fas fa-quote-left"></i></span>
                        <p className="mb-4 w-lg-70 mx-auto">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>

                        <h6 className="letter-spacing-1 text-primary">Niamah Hower</h6>
                        <span className="mb-0 letter-spacing-2">Patient</span>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}
