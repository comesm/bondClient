import  { initialState } from './initialState';
import {UNHANDLED_ERROR, FETCH_STUFF, RECEIVE_STUFF, RECEIVE_ERROR} from '../actions/actionTypes';

export default function stuffReducer(state = initialState.stuff, action) {
  let newState;
  console.log(6, state);
  console.log(7, action.type);
  console.log(8, action.stuff);
  switch(action.type) {
      case FETCH_STUFF: 
         return action.type;
      case RECEIVE_STUFF:
         newState = action.stuff;
         return newState;
      default: 
         return state;       
  }

}  