import React, { useState } from 'react'

const NameForm = () => {
    let [name, setName] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const restoreName = () => {
        setName('');
    }

  return (
    <div className='formname'>
        <form>
           <h4>Votre nom est <span style={{color : 'red'}}>{name}</span></h4> 
           <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter a text"
          />
          <button onClick={(restoreName)}>Restore Name</button>
        </form>
    </div>
  )
}

export default NameForm