import React from 'react';
import "./detcard.css";

const Crd =({crdName ,crdVal}) =>
{
    return (
        <div className="card-cont">
            <div className="crd-name">
                {crdName}
            </div>
            <div className="crd-val">
                {crdVal}
            </div>
        </div>
    )
}

export default Crd;

