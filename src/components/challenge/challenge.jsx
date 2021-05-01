import React from 'react';
import "./challenge.css";
import TestCont from '../TestCont/TestCont'


const Chall = ({
    selectedPara,
    words,
    char,
    wpm,
    timeLeft,
    timeStarted,
    testInfo,
    handleUserInput
    

})  => {
    return (
        <div className="chall-cont">
            <h1 data-aos="fade-down" className="chalhead">
                Check Your Speed Now!!
            </h1>
            <TestCont
            selectedPara={selectedPara}
            timeStarted={timeStarted} 
            timeLeft={timeLeft} 
            words={words} 
            char={char} 
            wpm={wpm}
            testInfo={testInfo}
            handleUserInput={handleUserInput}
           
            />
        </div>
    );
};

export default Chall;
