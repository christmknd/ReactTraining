import React, { useState } from 'react'

const Pizzamaker = () => {

    const [cheese , setCheese] = useState(0);
    const [tomato , setTomato] = useState(0);
    const [ham , setHam] = useState(0)

  return (
    <div className='pizzamaker'>
        <h3>Construisez votre propre pizza</h3>
        <div className='pizza'>
            <button onClick={() => setCheese(cheese +1)}>Cheese : {cheese}</button>
            <button onClick={()=> setTomato(tomato +1)}> Tomato : {tomato}</button>
            <button onClick={()=> setHam(ham +1)}>Ham : {ham}</button>
        </div>
        <div className='actions'>

        </div>
    </div>
  )
}

export default Pizzamaker