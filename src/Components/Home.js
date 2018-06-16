import style from './Home.css'
import React from 'react';
import ReactDOM from 'react-dom';

const Home = ({ name, surname }) => 
    (<div className={style.intro}>Hello React {name} {surname}</div>);

const Screen = ({ name, surname }) => 
 (<div className={style.intro}>Hello React {name} {surname}</div>);

const Page = ({ name, surname }) => 
 (<div className={style.intro}>Hello React {name} {surname}</div>);


 export {Screen, Page, Home}



//export default Home;


//const Greeting = 

//toshi

