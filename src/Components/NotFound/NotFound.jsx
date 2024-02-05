import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    useEffect(() => {
        document.title = '404';
    }, []);
    return <>
        <div className='d-flex text-center justify-content-center first-text align-items-center vh-90 sec-bg'>
            <div>
                <h1 className='d-block w-100 text-uppercase'> Not Found page</h1>
                <p className='d-block fs-2  w-100'>click <Link className='text-white text-decoration-underline pointer-event' to={'/'}>Here</Link> to back to Home page</p>
            </div></div>

    </>
}
