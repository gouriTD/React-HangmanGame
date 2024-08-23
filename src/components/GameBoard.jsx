import React from 'react'

function GameBoard({initialData,dataToUpdate}) {

    const gameData = Array.from(initialData.value)
  return (
    <div id="game-board">
      <h2>{initialData.type}</h2>  
    <ol>
      {gameData.map((ch,index)=>{
        // console.log(ch,typeof dataToUpdate)
        return (
          <div key={index+ch} className="box">{dataToUpdate?.includes(ch.toLowerCase()) ? ch : null}</div>
        )
      })}
    </ol>
  </div>
  )
}

export default GameBoard