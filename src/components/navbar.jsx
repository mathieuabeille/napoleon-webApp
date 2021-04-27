import React,{Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/navbar.scss';
import logo from '../../assets/img/logo-white.png';




function NavBar() {


  const handleScroll = () => {
    if (window.scrollY > 350) {
      document.querySelector(".navigation").className = "navigation navigation-scrolled";
    } else {
      document.querySelector(".navigation").className = "navigation";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return(
    <div className="navigation" >
        <img src={logo} alt="logo"  />
    </div>
    )
  };





export default NavBar;
