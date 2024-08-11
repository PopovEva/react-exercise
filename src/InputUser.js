import React, { useState } from 'react'

const InputUser = () => {
    const [bCollor, setbCollor] = useState("green")
  return (

    <div>
        Button Color: <input on onChange={(e)=> setbCollor(e.target.value)}/>
        <button 
                onClick={setbCollor} 
                style={{ backgroundColor: bCollor, padding: '10px', border: 'none', color: 'white', cursor: 'pointer' }}
            >
                Change Color
            </button>
    </div>
  )
}

export default InputUser