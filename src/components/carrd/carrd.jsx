import React from 'react';
import Crd from '../detcard/detcard';
import Int from '../interface/interface';
import './carrd.css';

const Tyc = ({
   
    selectedPara,
    testInfo,
    timeStarted,
    timeLeft,
    words,
    char,
    wpm,
    handleUserInput
    

}) =>
 { return (
     <div className="tyc-chal">
         {/* Details */}
         <div className="det-cont">
             {/*words */}
             
            <Crd crdName="Words" crdVal={words} />
             {/*char*/}
             
             <Crd crdName="Characters" crdVal={char} />

             {/*speed*/}
             
             <Crd crdName="Speed" crdVal={wpm} />
         </div>
         {/* challenge */}
         <div class="real">
             <Int 
            selectedPara={selectedPara}
            testInfo={testInfo}  
            timeStarted={timeStarted} 
            timeLeft={timeLeft}
            handleUserInput={handleUserInput}
             />
         </div>
     </div>
 );
 };

export default Tyc;