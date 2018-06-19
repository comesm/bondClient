import * as actionTypes from './actionTypes';

export function receiveStuff(data) {
    return { type: actionTypes.RECEIVE_STUFF, stuff: data };
}

export function errorFetch(data) {
    return { type: actionTypes.RECEIVE_ERROR, stuff: data };
}

export function unhandledError(data) {
    return { type: actionTypes.UNHANDLED_ERROR, stuff: data };
}

export function fetchStuff() {
    return async (dispatch) => {
     
    try {
      let response =await fetch('https://jsonplaceholder.typicode.com/users')
      let jsonResponse = response.json();
      let data = jsonResponse.data;    
      if(response.status === 200) {
        dispatch(receiveStuff(data));
      } else {
        dispatch(errorFetch(data)); 
      }     
    } catch(e) {
        dispatch(unhandledError(data));      
    }
  }     
}

