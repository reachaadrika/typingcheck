import React from 'react'
import './TryAgain.css';

const TryAgain =({words ,char ,wpm}) =>
{
    return (
        <div className="try-cont">
            <h1>Test Results</h1>
            <div className="res-cont">
                <p>
                    <b>Characters:</b> {char}
                    
                </p>

                <p>
                    <b>Words:</b> {words}
                    
                </p>

                <p>
                    <b>Wpm:</b> {wpm} wpm
                    
                </p>
            </div>
            <div>
                <button className="s1 social">
                          Retry    
                </button>
                 
                <button className="s2 social"
                onClick={() =>
                    window.open(
                        "https://www.facebook.com/sharer/sharer.php?u=",
                        "facebook-share-dialog",
                        "width=800,height=600"
                    )
                }>
                        Share
                </button>

                <button
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=Check%20this%20out%20",
                            "Twitter",
                            "width=800,height=600"
                        )
                    }
                    className="s3 social"
                >
                    Tweet
                </button>

                
            </div>
        </div>
    );
}

export default TryAgain;