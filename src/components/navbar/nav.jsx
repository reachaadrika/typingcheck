import React from 'react';
import ciop from './../../assets/ciop.png'
import "./nav.css"

const Nav = () => 
 {
     return (
         <div className="navbar-cont">
             <div className="navbar-1">
                 <img className="ciop" src={ciop} alt="logo" />
                 <p className="logo-txt">TypeTest</p>

             </div>
             <div className="navbar-2">
                 <a 
                 target="_blank"
                 className="link"
                 href="https://github.com/reachaadrika"
                 rel="noreferrer"
                 >
                     Source Code Here
                 </a>
             </div>
         </div>
     )
 }

export default Nav;