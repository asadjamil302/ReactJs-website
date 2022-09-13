import React from 'react'
/* Importing the Link component from the react-router-dom package. */
import { Link } from "react-router-dom";

/**
 * It takes a prop called PageName and displays it in the breadcrumbs
 * @param props - {
 * @returns A React component.
 */
export default function Breadcrumbs(props) {
  return (
    <div>
        <section className="page-title-section bg-img cover-background theme-overlay breadcrumbs" data-overlay-dark="8" data-background="img/bg/bg-07.jpg">
            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <h1>{props.PageName}</h1>
                    </div>
                    <div className="col-md-12">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a>{props.PageName}</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}
