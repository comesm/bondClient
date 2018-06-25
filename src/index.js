import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { configureStore, history } from './store/configureStore';
import { startListener } from './middleware/listener';


require("babel-polyfill");


const store = configureStore();

console.log(15, store, history);

startListener(history, store);

// const App = (data) => (
//         <div>
//             <Home name={"name"} surname={"Comes"} />
//            <Screen name={"John"} surname={"Locke"} /> 
//            <Page name={"Sam"} surname={"Locke"} /> 
//         </div>    
// )

const Root = ({ store }) => (
   <Provider store={store}>
    <Home />
   </Provider>           
)



render(
<Root store={store} />,

document.getElementById("index"));