import React, { useReducer } from 'react';

const INITIAL_STATE = 0

const counterReducer = (state, action) => {
    let counter = state;

    switch(action.type){
        case 'INCREMENT': {
            counter = counter +1
            return counter
        }
        case 'DECREMENT':{
            counter = counter > 0 ? counter -1 : counter
            return counter
        }
        default :{
            return state
        }
    }
}

const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  
    return (
        <>
        <div>
            <div>Counter:{state.counter}</div>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
        </div>
        </>
    );
  }

export default UseReducerCounter