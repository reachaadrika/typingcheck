import React from 'react';
import './testLetter.css';

const Testlett =({individualLetterInfo}) =>
{
    const statclass={
        correct:"tl-cor",
        incorrect:"tl-incorrect",
        Na:"tl-na",
    }[individualLetterInfo.status];


    return (
       <span className={`testlett ${statclass} ` }>
           {individualLetterInfo.testLetter}
       </span>
    );
}

export default Testlett;