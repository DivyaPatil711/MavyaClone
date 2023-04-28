import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'
import { FaCcVisa , FaCcMastercard , FaCcPaypal , FaMapMarkerAlt , FaPhoneAlt , FaEnvelope , FaCcAmazonPay} from 'react-icons/fa';
import { BsTwitter , BsFacebook , BsLinkedin , BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
            {/* <div class="container">
  <footer class="py-3 my-4 ">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <Link to='/' className=''><li class="nav-item"><a href="#" class="nav-link px-2 ">Home</a></li></Link>
    <Link to='/shop' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Shop</a></li></Link>
    <Link to='/media' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Media</a></li></Link>
    <Link to='/blog' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Blog</a></li></Link>
    <Link to='/contact' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Contact</a></li></Link>
    </ul>
    <p class="text-center text-muted">&copy; 2022 Footflops, Inc</p>
  </footer>
            </div> */}


            <footer className="footer-distributed">
        <div className="footer-left">
          <Link to='/'><img  src="./image/logonew.png"/></Link>
          <p className="footer-links">
            <Link to='/' className=''>Home</Link>
            <Link to='/shop' className=''>Information</Link>
            <Link to='/media' className=''>Lab Test</Link>
            <Link to='/blog' className=''>Book Appointment</Link>
            <Link to='/contact' className=''>Inquiry</Link>
          </p>
          <p class="text-muted">&copy; 2023 Mavya Hospital</p>

        </div>
        <div className="footer-center">
          <div>
            <FaMapMarkerAlt style={{color: '#fff' , marginRight: '8px'  , marginBottom: '20px' }} />
            <p><span>441 Cedros Ave</span> Solana Beach, Surat</p>
          </div>
          <div>
            <FaPhoneAlt style={{color: '#fff' , marginRight: '8px'}} />
            <p><a href="tel:+919328065181" style={{color: '#fff'}}>+91-1234-567-890</a></p>
          </div>
          <div>
            <FaEnvelope style={{color: '#fff' , marginRight: '8px' }}/>
            <p><a href="mailto:mavyahospital@gmail.com" style={{color: '#fff'}}>mavyahospital@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p style={{ color: 'white' }} className="footer-company-about">
            <span>About the Hospital</span>
            Over the years Mavya has been he pioneer of healthcare in India, and we are humbled by the love and trust placed in us by over 200 million patients and their families. It has motivated us to put in tireless efforts and remain unwavering in our commitment to bring you the best healthcare in the world.
          </p>
          
        </div>
      </footer>

      
    </>
  )
}

export default Footer