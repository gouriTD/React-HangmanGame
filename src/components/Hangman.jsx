import React from 'react'

function Hangman({select}) {
  return (
    <div id='hangman'><img src={`stick0${select}.png`} alt="stickman" /></div>
  )
}

export default Hangman