import PUSH from './routingActionTypes';
import  REPLACE from './routingActionTypes';
import  GO from './routingActionTypes';
import  GO_BACK from './routingActionTypes';
import  GO_FORWARD from './routingActionTypes';
 

export const push = (href) => ({
    type: PUSH,
    payload: href
})

export const replace = (href) => ({
    type: REPLACE,
    payload: href
})

export const go = (index) => ({
    type: GO,
    payload: index
})

export const goBack = () => ({
    type: GO_BACK
})

export const goForward = () => ({
    type: GO_FORWARD
})

export const locationChange = ({pathname, search, hash}) => ({
  type: LOCATION_CHANGE,
  payload: {
      pathname,
      search,
      hash
  }
});

