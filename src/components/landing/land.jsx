import React from 'react';
import './land.css';
import Typewriter from 'typewriter-effect';
import capmar from "./../../assets/capmar.png"

const Land =() =>
{   
    return(
    <div className="land-cont">
       <div data-aos="fade-right" className="land-1">
           <h1 className="head">
               So You Think You Can Type.....?
               </h1>
               <div className="effect">
               <Typewriter
    options={{
    strings: ['Fast!', 'Accurate!!',],
    autoStart: true,
    loop: true,
  }}
/>
</div>
         </div>      
       <div className="land-2">
           <img data-aos="fade-left" className="capmarvel" src={capmar} alt="super"></img>
       </div>
    </div>
    );
}

export default Land;