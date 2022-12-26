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
                  <Link to={"/pizzeria"}>Pizzeria</Link> |
                  <Link to={"/todo"}>Todolist</Link> |                </ul>
            </div>
    </nav>
  )
}

export default Nav