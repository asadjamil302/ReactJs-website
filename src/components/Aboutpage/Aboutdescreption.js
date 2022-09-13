import React from 'react'

/**
 * It returns a div that contains a section that contains a 
 * @returns A React component.
 */
export default function Aboutdescreption() {
  return (
    <div>
        <section>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 mb-1-9 mb-lg-0">
                        <div className="about-carousel">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="border border-width-10"><img src="img/content/about-01.jpg" alt="" /></div>
                                </div>
                                <div className="item">
                                    <div className="border border-width-10"><img src="img/content/about-02.jpg" alt="" /></div>
                                </div>
                                <div className="item">
                                    <div className="border border-width-10"><img src="img/content/about-03.jpg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">

                        <div className="pl-lg-5">
                            <h3 className="mb-4">About Septosha</h3>
                            <p className="h6 mb-4">We provide best care.It is safe &amp; compassionate care at its best for everyone.</p>
                            <p>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum. Cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum Cillum dolore eu fugiat nulla pariatur.</p>
                            <div className="story-video"><a className="butn btn-play popup-social-video vertical-align-middle" href="https://www.youtube.com/watch?v=WX34STX0Zqw">Our Story <i className="fa fa-play ml-2"></i></a></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
