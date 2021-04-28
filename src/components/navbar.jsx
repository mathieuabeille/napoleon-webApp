import React,{Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/navbar.scss';




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
Toto    </div>
    )
  };





export default NavBar;
