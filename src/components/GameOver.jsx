import React from 'react'

function GameOver({userWon,handleRestart,playerName,answer}) {
  console.log(answer)
  return (
    <div id='game-over'>
        <h2>Game Over</h2>
        {!userWon && <p>Correct answer: {answer}</p>}
        <p>{userWon ? `CONGRATULATIONS ${playerName} !!!! You WON` : 'Try Again!'}</p>
        <button onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default GameOver