import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const Nav = () => {

  return (
    <nav className='menu'>
            <div className='left-menu'>
            <p>React Pizerria</p>
            </div>
            <div className='right-menu'>
                <ul>
                  <Link to={"/"}>Accueil</Link> |
                  <Link to={"/nameform"}>Nameform</Link> |
                  <Link to={"/panier"}>Panier</Link> |
                  <Link to={"/pizzamaker"}>Pizzamaker</Link> 
                </ul>
            </div>
    </nav>
  )
}

export default Nav