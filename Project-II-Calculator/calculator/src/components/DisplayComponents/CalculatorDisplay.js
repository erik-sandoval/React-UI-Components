import React from 'react';
import './Display.scss';

const CalculatorDisplay = (props) => {
    return (
        <div className="calc-display">
            <p>{props.text}</p>
        </div>
    )
}

export default CalculatorDisplay