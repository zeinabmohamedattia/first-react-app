import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    useEffect(() => {
        document.title = 'About';

    }, []);


    return <>
        <nav className="navbar navbar-expand-lg first-bg fixed-top w-100  scrollOff">
            <div className="container px-5">
                <Link className="navbar-brand   text-white fs-2 fw-bold text-uppercase pe-5 me-5" to={'/'}>start framework</Link>
                <button className="navbar-toggler border-0 " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  ">
                        <li className="nav-item ">
                            <Link className="nav-link  px-3 text-white fw-bold me-3 text-uppercase" aria-current="page"
                                to={'about'}>about</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  px-3 fw-bold text-white me-3 text-uppercase" to={'Portfolio'}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  px-3 fw-bold text-white me-3 text-uppercase" to={'contact'}>contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>



    </>
}
