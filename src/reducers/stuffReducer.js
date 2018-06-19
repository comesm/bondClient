import { stuff } from './initialState';
import {UNHANDLED_ERROR, FETCH_STUFF, RECEIVE_STUFF, RECEIVE_ERROR} from '../actions/actionTypes';

export default function stuffReducer(state = stuff, { type } ) {
  let newState;
  
  switch(type) {
      case FETCH_STUFF: 
         return type;
      case RECEIVE_STUFF:
         newState = stuff;
         return newState;
      default: 
         return state;       
  }

}  