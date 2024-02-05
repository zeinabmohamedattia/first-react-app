import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        document.title = 'About';
    }, []);
    return <>
        <div className='component d-flex justify-content-center align-items-center text-white vh-90 sec-bg pt-5 mt-5'>
            <div className='container  pt-5'>
                <div className="text-center pt-5">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">about component</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white" ></div>
                        <i className="fa fa-star"></i>
                        <div className="line ms-3 bg-white" >
                        </div>
                    </div>

                </div>
                <div className='row gx-5 mt-5 px-5 '>
                    <div className='col-md-6 ps-md-5'>
                        <div className='ps-md-5'>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                    <div className='col-md-6 pe-md-5'>
                        <div className='pe-md-5'>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div></div>
    </>
}
