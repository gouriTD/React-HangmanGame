import React from 'react'

function GameInfo({correctInput,wrongInput,chances}) {
  return (
    <div className='info'>
        <p>Correct Inputs : {correctInput}</p>
        <p>Wrong Inputs : {wrongInput}</p>
        <p>Chances remaining: {chances}</p>
    </div>
    
  )
}

export default GameInfo