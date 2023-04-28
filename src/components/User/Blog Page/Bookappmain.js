import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import Loading from '../Loader/Loading';
import './Blog.css'
import { useAuth } from '../../../context/auth'
import { Link } from 'react-router-dom';
import Scroll from '../Home Pages/Scroll';
import {url} from '../../../API/api'
import Bookapp from './Bookapp'


export default function Bookappmain() {
  return (
    <>
      <div>
            <Navbar />
            <Bookapp/>
            <Scroll/>
            <Footer />
      </div> 
      
    </>
  )
}
  
       
         
    