import setCountReducer from './countReducer';
import { combineReducers } from 'redux';



const reducers = combineReducers({
  countReducerState: setCountReducer
})

export default reducers;
