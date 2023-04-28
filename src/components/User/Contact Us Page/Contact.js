import React from 'react'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import Loading from '../Loader/Loading'
import { useState , useEffect } from 'react'
import  './Contact.css'
import Inquiry from './inquiry'
import Scroll from '../Home Pages/Scroll'
const Contact = () => {
  const [isloading,setisloading] = useState(false)
  useEffect(()=>{
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
    }, 1000);
  },[])
  return (
    <>


              <Navbar/>
              <Inquiry/>
              <Scroll/>
              <Footer/>

        


    </>
  )
}

export default Contact
