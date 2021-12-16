import React, { Fragment } from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Fragment>
            <footer className="py-1">
                <div className="text-center mt-1">
                    <span>MyShop 2021-now, All Rights Reserved | </span>
                    <span>
                        <Link to="/privacy">
                            Privacy-Policy
                        </Link>
                    </span>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer

