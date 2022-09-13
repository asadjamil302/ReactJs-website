import React from 'react'

/**
 * It returns a div that contains a section that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a div that contains a div
 * that contains a div that contains a div that contains a div that contains a
 * @returns A React component.
 */
export default function Services() {
  return (
    <div>
        <section class="bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="text-primary mb-3 h1">Our Services</h2>
                    <p class="mx-auto mb-0 w-95 w-md-80 w-lg-60 w-xl-55">Care that doesn't end when you leave our center or clinic. We need to assist you with remaining sound in any event, when you're not here.</p>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div class="card border-0 border-radius-10 card-style3">
                            <div class="card-img">
                                <img src="img/services/service-09.jpg" alt="..." />
                                <span class="icon"><i class="fas fa-tooth"></i></span>
                            </div>
                            <div class="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                                <h3 class="h5 mb-3"><a href="#!" class="text-dark">Dental Service</a></h3>
                                <p>We believe in providing best treatment and skilled dental services</p>
                                <a href="#!" class="text-primary">read more<i class="fas fa-arrow-right small align-middle ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div class="card border-0 border-radius-10 card-style3">
                            <div class="card-img">
                                <img src="img/services/service-10.jpg" alt="..." />
                                <span class="icon"><i class="fas fa-x-ray"></i></span>
                            </div>
                            <div class="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                                <h3 class="h5 mb-3"><a href="#!" class="text-dark">Family Care</a></h3>
                                <p>We believe in providing best treatment and skilled family care services</p>
                                <a href="#!" class="text-primary">read more<i class="fas fa-arrow-right small align-middle ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 border-radius-10 card-style3">
                            <div class="card-img">
                                <img src="img/services/service-11.jpg" alt="..." />
                                <span class="icon"><i class="fas fa-brain"></i></span>
                            </div>
                            <div class="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                                <h3 class="h5 mb-3"><a href="#!" class="text-dark">Neurology Service</a></h3>
                                <p>We believe in providing best treatment and skilled neurology services</p>
                                <a href="#!" class="text-primary">read more<i class="fas fa-arrow-right small align-middle ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 text-center mt-5">
                        <a href="#!" class="butn">view more services</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
