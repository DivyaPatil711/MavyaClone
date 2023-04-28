import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from "../../context/auth";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import "./Navbar.css";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../../../context/auth";
import { useCart } from "../../../context/cart";
import { Badge } from "antd";
import axios from "axios";
import { url } from "../../../API/api";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  const [data, setdata] = useState([]);
  const user_id = localStorage.getItem("userId");
  const navigate = useNavigate();

  const dataload = async () => {
    await axios
      .get(`${url}/auth/get-add-to-cart/` + user_id)
      .then((res) => {
        setdata(res.data.cart_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    dataload();
  }, []);

  const [auth, setauth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
      userID: "",
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
    localStorage.removeItem("Cart");
    toast.success("Logout", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [anchorElUser, setAnchorElUser] = useState();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <ToastContainer />
      {/* style={{position: 'fixed' , top: '0' , width:'100%' , zIndex: '99999' }} */}
      <nav className="navbar" style={{ zIndex: "1" }}>
        <h3 className="logo">
          <Link to="/">
            <img src="./image/logonew.png" />
          </Link>
          {/* <img src={logo}/> */}
        </h3>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
          style={{marginRight:'7%'}}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          
          <li className="dropdown">
          Information
          <div class="dropdown-content">
           <Link to="/tips">Health Tips</Link>
           <Link to="/shop">OPD & IPD</Link>
           <Link to="/doc">Doctors & Blogs</Link>
          </div></li>
          
          <Link to="/Labtest" className="about">
            <li>Lab Test</li>
          </Link>
          <Link to="/bookappmain" className="about">
            <li>Book Appointment</li>
          </Link>
          <Link to="/contact" className="services">
            <li>Inquiry</li>
          </Link>
          
          
            <li className="dropdown">
              <i className="fas fa-phone" />
              <div class="dropdown-content">
                <a href="tel:+919328065181">Ambulance</a>
                <a href="tel:+919327983743">Emergency</a>
              </div>
            </li>
          
          

          {!auth?.user ? (
            <>
              <Link to="/login" className="services">
                <li>Login</li>
              </Link>
              <Link to="/register" className="services">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              <Link>
                <li>
                  {auth?.user?.name}
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Profile">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <i style={{ color: "#fff", fontSize: "30px" }}>
                          <FiUser />
                        </i>

                        {/* <Avatar
                          alt="Remy Sharp"
                          src="/static/imagess/avatar/2.jpg"
                        /> */}
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <ul style={{ padding: "2px" }}>
                        <Link style={{ color: "#000" }} to="/order">
                          <li
                            style={{
                              textAlign: "center",
                              cursor: "pointer",
                              width: "100px",
                            }}
                          >
                            My Order
                          </li>
                        </Link>
                        <Link
                          onClick={handleLogout}
                          to="/"
                          style={{ color: "#000" }}
                        >
                          <li
                            style={{
                              textAlign: "center",
                              cursor: "pointer",
                              width: "100px",
                            }}
                          >
                            Logout
                          </li>
                        </Link>
                      </ul>
                    </Menu>
                  </Box>
                </li>
              </Link>
            </>
          )}
          {/* <Link to='/cart'>
            <li>
              <Box sx={{ flexGrow: 0 }}>
                <Badge style={{ marginRight: '3px', minWidth: '14px', height: '14px', fontSize: '12px', lineHeight: '13px', marginTop: '6px' }} status="success" count={data?.length} showZero>
                  <IconButton sx={{ p: 0 }}>
                    <i style={{ color: '#fff', fontSize: '30px' }}><AiOutlineShoppingCart /></i>
                  </IconButton>
                </Badge>

              </Box>
            </li>
          </Link> */}
          {/* <Link to='/cart' className="justify-content-center">
            <Badge style={{ marginRight: '30px', minWidth: '14px', height: '14px', fontSize: '12px', lineHeight: '13px', marginTop: '15px' }} status="success" count={data?.length} showZero>
              <li><i style={{ color: '#fff', fontSize: '30px', padding: '0px' }}>
                <AiOutlineShoppingCart />
              </i>
              </li>
            </Badge>
          </Link> */}
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
