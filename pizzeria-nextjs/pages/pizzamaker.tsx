import React, { useEffect, useState } from 'react'


function Pizzamaker () {

    const [cheese , setCheese] = useState(0);
    const [ham, setHam] = useState(0);


    const increment = () => {
        setCheese(cheese +1)
    }

    const addHam = () => {
        setHam(ham+1)
    }

    const decrement = () => {
        setCheese(cheese -1)
    }

    const deleteHam = () => {
        setHam(ham -1)
    }

    const restart = () => {
        setCheese(0)
    }

    const hamRestart = () => {
        setHam(1)
    }

    useEffect( () => {
        setHam(ham +1);
    }, []
    )

    return (
        <div className='pizzamaker'>
        <h3>Construisez votre propre pizza</h3>
        <div className='counter'>
            <p> {cheese} Cheese</p>
            <p>{ham} Ham</p>
        </div>
        <div className='cheese-actions'>
            <button onClick={(increment)}> Add Cheese</button>
            <button onClick={(decrement)}> Delete Cheese</button>
            <button onClick={(restart)}>Restart</button>
        </div>
        <div className='ham-actions'>

        <button onClick={(addHam)}>Add Ham</button>
        <button onClick={(deleteHam)}> Delete Ham</button>
            <button onClick={(hamRestart)}>Restart</button>
        </div>
    </div>
    )
}

export default Pizzamaker;