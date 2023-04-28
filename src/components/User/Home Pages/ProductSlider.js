import React from 'react'
import './ProductSlider.css'

const ProductSlider = () => {
  return (
    <>
            {/* <div className="container">
                <div className="grid grid-three-coloum-discount">
                    <div className=' discount-box text-1'>
                        <img src="./image/cms-banner-01.jpg" alt="" />
                        <p>Up To 50% Discount</p>
                        <span>Traditional Men Shoes</span>
                    </div>
                    <div className='discount-box text-2'>
                        <img src="./image/cms-banner-02.jpg" alt="" />
                        <p>40% Discount</p>
                        <span>Best Sport Shoes</span>
                    </div>
                    <div className='discount-box text-1'>
                        <img src="./image/cms-banner-03.jpg" alt="" />
                        <p>Up To 20% Discount</p>
                        <span>Women's Classic Shoes</span>
                    </div>
                </div>
            </div> */}
            <br/>
            
            <div className="container">
                <div className="row p-0">
                    <div className='col-md-4 ps-box text-1 mb-2 p-0 text-center  imgs_hover effect'>
                        <img src="./image/su.jpg" alt="" />
                        
                    </div>
                    <div className='col-md-4 ps-box text-2 mb-2 p-0 text-center'>
                        <div className='ps-img imgs_hover effect'>
                        <img src="./image/su1.jpg" alt="" />
                        </div>
                       
                    </div>
                    <div className='col-md-4 ps-box text-1 mb-2 p-0 text-center imgs_hover effect'>
                        <img src="./image/su2.jpg" alt="" />
                        
                    </div>
                </div>
            </div>
            <br/><br/>
            	
    </>
  )
}

export default ProductSlider
