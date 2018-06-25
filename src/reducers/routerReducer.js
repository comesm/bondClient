import { initialRouteState } from './initialState';

export const routerReducer = (state = initialRouteState, action) => {
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