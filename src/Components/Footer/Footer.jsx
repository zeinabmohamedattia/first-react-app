import React from 'react'

export default function Footer() {
  return <>
    <footer className=' first-bg text-white pt-5  '>
      <div className='container py-5'>
        <div className='row g-4 '>
          <div className='col-md-4 text-center'>
            <h3 className=''> LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-md-4 text-center'>
            <h3 className=''> AROUND THE WEB</h3>
            <ul className='d-flex justify-content-center align-items-center ms-auto mt-2'>
              <li className='d-flex me-2 justify-content-center align-items-center rounded-circle' >
              <i className='fa-brands fa-facebook'></i>
              </li>
              <li className='d-flex me-2 justify-content-center align-items-center rounded-circle' >
                <i className='fa-brands fa-twitter'></i>
              </li>
              <li className='d-flex me-2 justify-content-center align-items-center rounded-circle' >
                <i className='fa-brands fa-linkedin-in'></i>
              </li>
              <li className='d-flex me-2 justify-content-center align-items-center rounded-circle' >
                <i className='fa fa-globe'></i>
              </li>
            </ul>
          </div>
          <div className='col-md-4 text-center'>
            <h3 className=''> ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            
          </div>
        </div>
        
    
      </div>
      <div className='w-100 bg-dark text-center py-3'>
          <p> Copyright © Your Website 2021 </p>
        </div>
    </footer>
  </>
}
