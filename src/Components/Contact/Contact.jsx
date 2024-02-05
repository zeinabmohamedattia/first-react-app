import { useEffect } from 'react'
export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';
    }, []);
    function displayLabel(e) {

        if (e.target.value !== '') {
            e.target.previousElementSibling.classList.replace('opacity-0', 'opacity-1')
            e.target.previousElementSibling.classList.replace('labelOff', 'labelOn')
        }
        else {
            e.target.previousElementSibling.classList.replace('labelOn', 'labelOff')
            e.target.previousElementSibling.classList.replace('opacity-1', 'opacirty-0')
        }
    }
    function preventDefaultBtn(e) {
        e.preventDefault();
    }
    return <>
        <div className='pt-5 mt-5'>
            <div className='container'>
                <div className="text-center pt-5 first-text w-100">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">contact section</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 first-bg" ></div>
                        <i className="fa fa-star"></i>
                        <div className="line ms-3 first-bg" >
                        </div>
                    </div>
                </div>
                <form className='w-50 p-4 mx-auto pt-5 mt-5'>
                    <div className='position-relative py-4  '>
                        <label htmlFor="userName" className=" position-absolute opacity-0 labelOff sec-text z-2  ">userName : </label>
                        <input type="text" placeholder="userName" name="userName" onInput={displayLabel} className="form-control border-0  border-bottom position-relative z-3 py-3 mt-2     " />
                    </div>
                    <div className='position-relative py-4 '>
                        <label htmlFor="userName" className="position-absolute opacity-0 labelOff  sec-text z-2  ">userAge : </label>
                        <input type="number" placeholder="userAge" name="userAge" onInput={displayLabel} className="form-control border-0  border-bottom position-relative z-3 py-3 mt-2   " />
                    </div>
                    <div className='position-relative py-4 '>
                        <label htmlFor="userEmail" className="position-absolute opacity-0 labelOff sec-text z-2   ">userEmail : </label>
                        <input type="email" placeholder="userEmail" name="userEmail" onInput={displayLabel} className="form-control border-0  border-bottom position-relative z-3 py-3 mt-2  " />
                    </div>
                    <div className='position-relative py-4 '>
                        <label htmlFor="userPassword" className="position-absolute opacity-0 labelOff sec-text z-2   ">userPassword : </label>
                        <input type="paassword" placeholder="userPassword" name="userPassword" onInput={displayLabel} className="form-control border-0  border-bottom position-relative z-3 py-3 mt-2  " />
                    </div>
                    <button onClick={preventDefaultBtn} className="btn mt-4 text-white sec-bg" > send Message </button>
                </form>
            </div>
        </div>

    </>
}
