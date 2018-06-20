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
      console.log(20, 'inside try');
      let response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'GET',
          headers: {
              Accept: 'application/json'
          }
      })
      let jsonResponse = await response.json();
      
      if(response.status === 200) {
        dispatch(receiveStuff(jsonResponse));
      } else {
        dispatch(errorFetch(jsonResponse)); 
      }     
    } catch(e) {
        dispatch(unhandledError({msg: e}));      
    }
  }     
}

