//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

//components
import App from './App';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import Pizzeria from './views/Pizzeria';
import Todo from './views/Todo';
import Error from './components/Error';

//styles
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Nav/>
    <Routes>
    <Route exact path= "/" element={ <App />}></Route>
    <Route exact path= "/pizzeria" element={ <Pizzeria />}></Route>
    <Route exact path= "/todo" element={ <Todo/>}></Route>
    <Route path= "*" element={ <Error/>}></Route>
    </Routes>
    <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
