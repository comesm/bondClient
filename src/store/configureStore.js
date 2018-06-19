import {createStore, applyMiddleware} from 'redux';
import stuffReducer from '../reducers/stuffReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    stuffReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}