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
    console.log(16);
    return async (dispatch) => {
    console.log(18);
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'GET',
          headers: {
              Accept: 'application/json'
          }
      })
      console.log(25, response);
      let jsonResponse = await response.json();
      console.log(26, jsonResponse);
      if(response.status === 200) {
        console.log(28);
        dispatch(receiveStuff(jsonResponse));
      } else {
        console.log(30);
        dispatch(errorFetch(jsonResponse)); 
      }     
    } catch(e) {
        console.log(33);
        dispatch(unhandledError({msg: e}));      
    }
  }     
}

