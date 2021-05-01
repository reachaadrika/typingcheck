import React from 'react';
import Testlett from '../testLetter/testLetter';
import './interface.css';


const Int = ({
    testInfo,
    timeStarted,
    timeLeft,
    handleUserInput,
}) =>
{
    console.log("check",testInfo);
    return (
           <div className="typing-challenge">
               <div className="timer-container">
                   <p className="timer">
                       00:{timeLeft}
                   </p>
                   <p className="timer-info">
                       {!timeStarted && "Begin Typing to Start Test"}
                    
                   </p>
               </div>
               <div className="textarea-container">
                   <div className="textarea-left">
                       <div className="textarea test-paragraph">
                         { /* {selectedPara} */}
                         {testInfo.map((individualLetterInfo,index) => {
    
                          return (
                              <Testlett 
                              key={index}
                              individualLetterInfo = {individualLetterInfo}
                              
                              />
                              );
                          })}
                       </div>
                   </div>
                    <div className="textarea-right">
                        <textarea 
                           
                         onChange={(e) => handleUserInput(e.target.value)}
                        className="textarea"
                        placeholder="Start Typing Here"
                        ></textarea>
                    
               </div>
           </div>
           </div>
    )
}

export default Int