import React from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';

import { incrementCounter, decrementCounter } from '../redux/action/countActions';

const Button = () => {

    const contador = useSelector(state => state.countReducerState);
    const dispatch = useDispatch();
    return ( 
        <>
        <div>
            <div>Counter:{contador}</div>
            <button onClick={() => dispatch(incrementCounter())}>+</button>
            <button onClick={() => dispatch(decrementCounter())}>-</button>
        </div>
        </>
     );
}
 
export default Button;