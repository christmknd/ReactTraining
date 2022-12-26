import React, {useState } from 'react';
import '../../App.css';


function Pizzamaker () {
    
    const [cheese , setCheese] = useState(0);


    function increment () {
        setCheese(cheese +1)
    }


    function decrement() {
        setCheese(cheese -1)
    }

    function restart () {
        setCheese(0)
    }


  return (
    <div className='pizzamaker'>
        <h3>Construisez votre propre pizza</h3>
        <div className='counter'>
            <p data-testid = "cheese-counter"> {cheese} Cheese</p>
        </div>
        <div className='cheese-actions'>
            <button onClick={(increment)}> Add Cheese</button>
            <button onClick={(decrement)}> Delete Cheese</button>
            <button onClick={(restart)}>Restart</button>
        </div>
    </div>
  )
}


export default Pizzamaker