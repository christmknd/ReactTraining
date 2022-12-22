import React from 'react'

const Nav = () => {

  return (
    <nav className='menu'>
            <div className='left-menu'>
            <p>React Pizerria</p>
            </div>
            <div className='right-menu'>
                <ul>
                    <li> <a href="accueil"> Accueil</a></li>
                    <li><a href="panier">Panier</a></li>
                </ul>
            </div>
    </nav>
  )
}

export default Nav