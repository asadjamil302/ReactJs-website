import React from 'react'

/**
 * It returns a div that contains a section that contains a div
 * @returns A React component.
 */
export default function Whychooseus() {
  return (
    <div>
        <section class="pb-lg-0 md">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="text-primary mb-3 h1">Why Choose Us ?</h2>
                    <p class="mx-auto mb-0 w-95 w-md-80 w-lg-60 w-xl-55">Care that doesn't end when you leave our center or clinic. We need to assist you with remaining sound in any event, when you're not here.</p>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-6 col-lg-4 mb-1-9 mb-md-0">
                        <div class="feature-box-01 mb-1-9 mb-md-6 mb-xl-8">
                            <div class="media">
                                <div class="align-middle icon-circle"><img src="img/icons/icon-opration.png" alt="..." /></div>
                                <div class="ml-1-6 mt-1">
                                    <h3 class="h4 mb-3">Operation Theatre</h3>
                                    <p class="mb-0">Operation theatre is inside a center where careful surgical operations are carried in an aseptic environment.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box-01">
                            <div class="media">
                                <div class="align-middle icon-circle"><img src="img/icons/icon-doctor.png" alt="..." /></div>
                                <div class="ml-1-6 mt-1">
                                    <h3 class="h4 mb-3">Qualified Doctors</h3>
                                    <p class="mb-0">Our talented specialists have enormous involvement in wide scope of diseases to serve for the patients.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                        <img src="img/content/doctor.png" alt="..." />
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-box-01 mb-1-9 mb-md-6 mb-xl-8">
                            <div class="media">
                                <div class="align-middle icon-circle"><img src="img/icons/icon-checkup.png" alt="..." /></div>
                                <div class="ml-1-6 mt-1">
                                    <h3 class="h4 mb-3">Indoor Checkup</h3>
                                    <p class="mb-0">We have planned affordable health checkup packages to assimilate joy as happiness for the society.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box-01">
                            <div class="media">
                                <div class="align-middle icon-circle"><img src="img/icons/icon-ambulance.png" alt="..." /></div>
                                <div class="ml-1-6 mt-1">
                                    <h3 class="h4 mb-3">Emergency Care</h3>
                                    <p class="mb-0">We gives 24-hour emergency service to adults and kids at our center unit with an experts of doctors.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
