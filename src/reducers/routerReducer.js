import { initialRouteState } from './initialState';
import { LOCATION_CHANGE } from '../actions/routingActionTypes';

export default function routerReducer(state = initialRouteState, action) {
   switch(action.type) {
    case LOCATION_CHANGE: 
      return {
          ...state, 
          ...action.payload
      };
    default: 
      return state;
    }
} 