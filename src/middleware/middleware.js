import {PUSH, REPLACE, GO, GO_BACK, GO_FORWARD} from '../actions/routingActionTypes';

export const routerMiddleware = (history) => () => (next) =>
  (action) => {
    console.log(5, "HISTORY: ", history, " NEZT: ", next, " ACITON: ", action);
    switch (action.type) {
          case PUSH:
            history.push(action.payload);
            break;
          case REPLACE:
            history.replace(action.payload);
            break;
          case GO:
            history.go(action.payload);
            break;
          case GO_BACK:
            history.goBack();
            break;
          case GO_FORWARD: 
            history.goForward();
            break;
          default: 
            return next(action);             
      }
  }