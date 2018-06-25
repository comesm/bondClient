import {combineReducers, createStore, applyMiddleware } from 'redux';
import stuffReducer from '../reducers/stuffReducer';
import routerReducer from '../reducers/routerReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from '../middleware/middleware';
import { createBrowserHistory } from 'history';
//import { startListener } from '../middleware/listener';


const rootReducer = combineReducers({
  stuff: stuffReducer,
  router: routerReducer
});

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);
//console.log(18, startListener);
//startListener(history, store);



export function configureStore() {

  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware, thunk)
  );
}