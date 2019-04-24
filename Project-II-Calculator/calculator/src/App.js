import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      <div className="container">
        <CalculatorDisplay text="88888888"/>
        <ActionButton buttonStyle="wide-button" text="clear" />
        <NumberButton buttonStyle="action-button" text="/" />
        <NumberButton buttonStyle="number-button" text="7" />
        <NumberButton buttonStyle="number-button" text="8" />
        <NumberButton buttonStyle="number-button" text="9" />
        <NumberButton buttonStyle="action-button" text="x" />
        <NumberButton buttonStyle="number-button" text="4" />
        <NumberButton buttonStyle="number-button" text="5" />
        <NumberButton buttonStyle="number-button" text="6" />
        <NumberButton buttonStyle="action-button" text="-" />
        <NumberButton buttonStyle="number-button" text="1" />
        <NumberButton buttonStyle="number-button" text="2" />
        <NumberButton buttonStyle="number-button" text="3" />
        <NumberButton buttonStyle="action-button" text="+" />
        <ActionButton buttonStyle="wide-button" text="0" />
        <NumberButton buttonStyle="action-button" text="=" />
      </div>
    </div>
  );
};

export default App;
