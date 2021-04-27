import React,{ useState } from 'react';
import '../../assets/stylesheets/Dots.scss';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';


function Dot(props) {
  const name = props.name;

  const handleScroll = () => {

    if (window.scrollY > 350) {
      var x, i;
      x = document.querySelectorAll(".dot");
        for (i = 0; i < x.length; i++) {
          x[i].className = "dot dot-scrolled";
         }
    } else if(window.scrollY > 300){
      var x, i;
      x = document.querySelectorAll(".dot");
        for (i = 0; i < x.length; i++) {
          x[i].className = "dot";
      }
    } else {
      var x, i;
      x = document.querySelectorAll(".dot");
        for (i = 0; i < x.length; i++) {
          x[i].className = "dot hidden";
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return(
    <div>
    <ReactTooltip effect="solid" backgroundColor="transparent" />
      <Link
        to={{
    pathname: "/home",
    hash: "#ContentRight",
    state: { fromDashboard: true }
      }}
    >
      <button
        className='dot' data-tip={name}
        >
      </button>
      </Link>
    </div>
    )
  };




export default Dot;
