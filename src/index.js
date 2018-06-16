import React from 'react';
import ReactDOM from 'react-dom';
import {Home, Screen, Page} from './Components/Home'

console.log(Home, Screen, Page) //, Screen );

const App = () => (
        <div>
            <Home name={"michael"} surname={"Comes"} />
           <Screen name={"John"} surname={"Locke"} /> 
           <Page name={"Sam"} surname={"Locke"} /> 
        </div>    
)


ReactDOM.render(<App />, document.getElementById("index"));