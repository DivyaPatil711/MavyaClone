import React from 'react'
import Slider from './Slider'
import './Home.css'
import Collection from './Collection'
import BrandLogo from './BrandLogo'
import Contactwith from './Contactwith'
import Scroll from './Scroll'
import ProductSlider from './ProductSlider'
import Navbar from '../Header & Footer/Navbar'
import Footer from '../Header & Footer/Footer'
import Loading from '../Loader/Loading'
import Featureproduct from '../Home Pages/Featureproduct'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Bloghome from './Bloghome'
import Slider2 from './Slider2'
import Card from './Card'

const Home = () => {
  const [isloading, setisloading] = useState(false)
  useEffect(() => {
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
    }, 1000);
  }, [])

  return (
    <>

      {
        isloading ?
          <Loading /> :
          <div>
            <Navbar />
            <Slider />
            <Collection />
            <Slider2/>
            <BrandLogo />
            <ProductSlider />
            
            <Footer />
            <Scroll />
          </div>

      }
    </>
  )
}

export default Home
