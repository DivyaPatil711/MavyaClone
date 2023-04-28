import Footer from "../Header & Footer/Footer";
import Navbar from "../Header & Footer/Navbar";
import "./Tips.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import Loading from "../Loader/Loading";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Star from "./Star";
import Currency from "../Helper/Currency";
import Scroll from '../Home Pages/Scroll'
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {url} from '../../../API/api'
import Tipsmain from "./Tipsmain";



const Shop = () => {

  const [data, setdata] = useState([]);

  const viewProduct = async () => {
    const result = await axios.get(
      `${url}/product/view-product`
    );
    setdata(result.data);
  };

  const Add_to_cart = (id) => {

    let user_id = localStorage.getItem('userId');

    if (!user_id) {
      toast.error("Pls Login Account", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const oldcart = JSON.parse(localStorage.getItem('Cart')) || [];
      oldcart.push(id);
      localStorage.setItem('Cart', JSON.stringify(oldcart));

      toast.success("Add Item", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const Newdata = {
        user_id: user_id,
        Data: oldcart,
      }
      axios.post(`${url}/auth/add-to-cart`, { Newdata: Newdata })
    }
  }

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  useEffect(() => {
    viewProduct();
  }, []);

  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    setisloading(true);
    setTimeout(() => {
      setisloading(false);
    }, 1000);
  }, []);

  return (
    <>

      <ToastContainer />
      {isloading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
         <Tipsmain/>
          <Scroll />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Shop;
