import React, { useState } from 'react'


function Nameform () {

    let [name, setName] = useState('');
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(event.target.value);
    }

    const restoreName = () => {
        setName('');
    }

    return (
        <div className='formname'>
        <h1>Nameform</h1>
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

export default Nameform;