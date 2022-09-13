import React from 'react'

/**
 * It's a function that returns a div that contains a div that contains an iframe.
 * @returns A div with a class of container googlemap.
 */
export default function Googlemap() {
  return (
    <div>

        <div className="container googlemap">

            <iframe class="map" src="https://maps.google.com/maps?q=london&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        </div>

    </div>
  )
}
