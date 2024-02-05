import { useEffect } from 'react'
import card1 from '../../assets/images/poert1.png'
import card2 from '../../assets/images/port2.png'
import card3 from '../../assets/images/port3.png'
export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return <>
    <div className='pt-5 mt-5'>
      <div className='container'>
        <div className="text-center pt-5 first-text">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 first-bg" ></div>
            <i className="fa fa-star"></i>
            <div className="line ms-3 first-bg" >
            </div>
          </div>

        </div>
        <div className='row g-5 py-5'>
          <div className='col-md-4 '>
            <div className='card position-relative '>
              <img alt='pic1' src={card1} className='w-100' />
              <div className='layer position-absolute top-0 bottom-0 end-0 start-0 text-white  d-flex justify-content-center align-items-center'>
                <i className='fa fa-plus fa-8x'></i>
              </div>
            </div>
          </div>
          <div className='col-md-4 '>
            <div className='card position-relative '>
              <img alt='pic2' src={card2} className='w-100' />
              <div className='layer position-absolute top-0 bottom-0 end-0 start-0 text-white  d-flex justify-content-center align-items-center'>
                <i className='fa fa-plus fa-8x'></i>
              </div>
            </div>
          </div>  <div className='col-md-4 '>
            <div className='card position-relative '>
              <img alt='pic3' src={card3} className='w-100' />
              <div className='layer position-absolute top-0 bottom-0 end-0 start-0 text-white  d-flex justify-content-center align-items-center'>
                <i className='fa fa-plus fa-8x'></i>
              </div>
            </div>
          </div>  <div className='col-md-4 '>
            <div className='card position-relative '>
              <img alt='pic1' src={card1} className='w-100' />
              <div className='layer position-absolute top-0 bottom-0 end-0 start-0 text-white  d-flex justify-content-center align-items-center'>
                <i className='fa fa-plus fa-8x'></i>
              </div>
            </div>
          </div>  <div className='col-md-4 '>
            <div className='card position-relative '>
              <img alt='pic2' src={card2} className='w-100' />
              <div className='layer position-absolute top-0 bottom-0 end-0 start-0 text-white  d-flex justify-content-center align-items-center'>
                <i className='fa fa-plus fa-8x'></i>
              </div>
            </div>
          </div>  <div className='col-md-4 '>
            <div className='card position-relative '>
              <img alt='pic3' src={card3} className='w-100' />
              <div className='layer position-absolute top-0 bottom-0 end-0 start-0 text-white  d-flex justify-content-center align-items-center'>
                <i className='fa fa-plus fa-8x'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
