import React from 'react'

/**
 * It returns a div that contains a div
 * @returns A React component.
 */
export default function Slider() {
  return (
    <div>
        <div class="main-slider">
            <div class="slider-fade">
                <div class="owl-carousel owl-theme w-100">
                    <div class="text-center item cover-background bg-img sliderimage1" data-overlay-dark="7" data-background="img/banner/slide1.jpg">
                        <div class="container h-100">
                            <div class="d-table h-100 w-100">
                                <div class="d-table-cell align-middle">
                                    <div class="caption">
                                        <h3 class="alt-font text-white m-0">Welcome to</h3>
                                        <h1 class="text-white">Best Medical &amp; Hospital</h1>
                                        <p class="mb-4 d-none d-md-block">We provide best for our patients and always try to achieve our patients trust</p>
                                        <a href="#!" class="butn">
                                            <span class="alt-font">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center item cover-background bg-img sliderimage2" data-overlay-dark="6" data-background="img/banner/slide2.jpg">
                        <div class="container h-100">
                            <div class="d-table h-100 w-100">
                                <div class="d-table-cell align-middle">
                                    <div class="caption">
                                        <h3 class="alt-font text-white m-0">We provide</h3>
                                        <h1 class="text-white">Health care solution</h1>
                                        <p class="mb-4 d-none d-md-block">We provide best for our patients and always try to achieve our patients trust</p>
                                        <a href="#!" class="butn">
                                            <span class="alt-font">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center item cover-background bg-img sliderimage3" data-overlay-dark="6" data-background="img/banner/slide3.jpg">
                        <div class="container h-100">
                            <div class="d-table h-100 w-100">
                                <div class="d-table-cell align-middle">
                                    <div class="caption">
                                        <h3 class="alt-font text-white m-0">We always</h3>
                                        <h1 class="text-white">We caring for life</h1>
                                        <p class="mb-4 d-none d-md-block">We provide best for our patients and always try to achieve our patients trust</p>
                                        <a href="#!" class="butn">
                                            <span class="alt-font">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
