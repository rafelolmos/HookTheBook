import React from 'react';

// import { connect } from 'react-redux';
// import { incrementCounter, decrementCounter } from '../redux/action/countActions';


const Button = ({counter, incrementCounter, decrementCounter}) => {
    return ( 
        <>
        <div>
            <div>Counter:{counter}</div>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
        </>
     );
}
 
export default Button;