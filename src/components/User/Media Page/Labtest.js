import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import Scroll from '../Home Pages/Scroll'
import Loading from '../Loader/Loading'
import {url} from '../../../API/api'
import Labtest1 from './Labtest1'


export default function Labtest() {
  return (
    <>
        <Navbar/>
        <Labtest1/>
        <Scroll />
        <Footer />
    </>
  )
}


                                                

                                        
