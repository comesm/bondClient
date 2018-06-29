import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { configureStore, history } from './store/configureStore';
import { startListener } from './middleware/listener';
import { push } from './actions/routingActions';

require("babel-polyfill");


const store = configureStore();

startListener(history, store);

// const App = (data) => (
//         <div>
//             <Home name={"name"} surname={"Comes"} />
//            <Screen name={"John"} surname={"Locke"} /> 
//            <Page name={"Sam"} surname={"Locke"} /> 
//         </div>    
// )
let currentLocation = store.getState();

let unsubscribe = store.subscribe(() => {
    let previousLocation = currentLocation;
    currentLocation = store.getState();
})

store.dispatch(push('/about'));

const Root = ({ store }) => (
   <Provider store={store}>
    <Home />
   </Provider>           
)



render(
<Root store={store} />,

document.getElementById("index"));