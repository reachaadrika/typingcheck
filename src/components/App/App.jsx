import React from 'react';
import Nav from "../navbar/nav";
import Land from "../landing/land";
import Footer from "../footer/footer";
import "./App.css";
import Chall from '../challenge/challenge';

const TotalTime=60;
const Api="http://metaphorpsum.com/paragraphs/1/9";


class App extends React.Component
{
    state =
    {
        selectedPara:"aadrika is here ",
        testInfo:[],
        timeStarted :  false,
        timeLeft : TotalTime,
        words : 0,
        char:0,
        wpm:0,
        
    }

    startTime = () => {
        
        this.setState({timeStarted :true});
        const time=setInterval(() => {
            if(this.state.timeLeft > 0)
            {
                //sspd chsnge

                const TimeSpent = TotalTime -this.state.timeLeft;
                const wpm = TimeSpent > 0 ? (this.state.words / TimeSpent) *TotalTime : 0;
                this.setState ({
                    timeLeft:this.state.timeLeft -1,
                    wpm:parseInt (wpm), //integer k liye 
                });
            }
            else
            {
                clearInterval(time);
            }
        },1000);
    };
    
    
    handleUserInput = (inputValue) => {
        if(this.state.timeStarted===false)
        {
            this.startTime();
        }

        const char =inputValue.length;
        const words=inputValue.split(" ").length;
        const index= char-1;

        if(index < 0)
        {
            this.setState({
                testInfo:[
                    {
                        testLetter: this.setState.testInfo[0],
                        status:"Na",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                char,
                words,
            });
            return;
        }

        if(index >= this.state.selectedPara.length)
        {
            this.setState({
                char,
                words,
            });
            return;
        }

        const testInfo = this.state.testInfo;
        if(!(index === this.state.selectedPara.length -1 ))
        testInfo[index+1].status="Na";

        const isCorrect =inputValue[index] === testInfo[index].testLetter;
        testInfo[index].status=isCorrect ?"correct" : "incorrect"

        this.setState(
            {
                testInfo,
                words,
                char,
            });
        
        
        console.log(inputValue);


    };


  componentDidMount()
  {
  fetch(Api).then(response =>response.text() )
    .then((info) => {
        console.log(info);
        this.setState({selectedPara:info});
        const  paraArray =info.split("");
     
        console.log('hu',paraArray);

     const testInfo = paraArray.map(selLetter => {
         return {
             testLetter: selLetter, 
             status:"Na",
         };
     });

     this.setState({ testInfo,selectedPara:info });
    });
  
    
   // this.setState({timeLeft: 30}) //updates the component 's state object 
    // renders again
  }
    render()
    {
           console.log("render call");
           console.log("ti:",this.state.testInfo);
         /*     fetch(Api).then(response =>response.text() )
                   .then((info) => {
                       console.log("API response !",info);
                   });
                   */

        return (
            <div className="app">
                {/* NAVIGATION */}
                <Nav />

                {/*LANDING PAGE */}

                <Land />

                {/*challenge*/}
                <Chall selectedPara={this.state.selectedPara}
                testInfo={this.state.testInfo}
                timeStarted={this.state.timeStarted}
                timeLeft={this.state.timeLeft}
                words={this.state.words}
                char={this.state.char}
                wpm={this.state.wpm}
                handleUserInput={this.handleUserInput}
                
                />

                {/*footer*/}
                <Footer />
            </div>
        )
    }
}

export default App;