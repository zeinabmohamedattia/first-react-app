
import avatar from '../../assets/images/avataaars.svg'
import { useEffect } from 'react'
export default function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);
    return <>

        <div className="home d-flex justify-content-center align-items-center text-white sec-bg mt-5 py-5 ">
            <div className="text-center pt-5 ">
                <img src={avatar} alt="avatar" className="mb-3 w-75" />
                <div className="text-center pt-4">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white" ></div>
                        <i className="fa fa-star"></i>
                        <div className="line ms-3 bg-white" >
                        </div>
                    </div>
                </div>
                <div >Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>
    </>
}
