import {combineReducers, createStore, applyMiddleware } from 'redux';
import stuffReducer from '../reducers/stuffReducer';
import routerReducer from '../reducers/routerReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from '../middleware/middleware';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
  router: routerReducer,
  stuff: stuffReducer
  
});


export function configureStore() {

  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware, thunk)
  );
}