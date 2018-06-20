import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
require("babel-polyfill");
const store = configureStore();

// const App = (data) => (
//         <div>
//             <Home name={"name"} surname={"Comes"} />
//            <Screen name={"John"} surname={"Locke"} /> 
//            <Page name={"Sam"} surname={"Locke"} /> 
//         </div>    
// )




render(
<Provider store={store}>
   <Home /> 
</Provider>,

document.getElementById("index"));