//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

//components
import App from './App';
import Error from './components/Error';
import Footer from './components/layouts/Footer';
import NameForm from './components/pizza/NameForm';
import Nav from './components/layouts/Nav';
import Panier from './components/pizza/Panier';
import Pizzamaker from './components/pizza/Pizzamaker';

//styles
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Nav/>
    <Routes>
    <Route exact path= "/" element={ <App />}></Route>
    <Route exact path= "/nameform" element={ <NameForm />}></Route>
    <Route exact path= "/panier" element={ <Panier/>}></Route>
    <Route exact path= "/pizzamaker" element={ <Pizzamaker/>}></Route>
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
