import React from 'react';
import Tyc from '../carrd/carrd';
import TryAgain from '../TryAgain/TryAgain';
import './TestCont.css';

const TestCont =({
        selectedPara,
        testInfo,
        timeStarted,
        timeLeft,
        words,
        char,
        wpm,
        handleUserInput
        
}) => {
      
    return (
        <div className="test-cont">
            {
                timeLeft >  0 ? (
                    <div data-aos ="fade-up "className="typchall">
                <Tyc 
                selectedPara={selectedPara}
                testInfo={testInfo}
                timeStarted={timeStarted}
                timeLeft={timeLeft}
                words={words}
                char={char}
                wpm={wpm}
                handleUserInput={handleUserInput}
                
                />
            </div>
                ) :
            
     
        ( <  div className="try">
            <TryAgain words={words} char={char} wpm={wpm}/>
    </div>
        )}
        </div>
    );
}

export default TestCont;