import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import UserInput from "./components/UserInput"
import GameInfo from "./components/GameInfo"
import { useState } from "react"
import { PLAY_DATA } from "./data"
import GameOver from './components/GameOver'
import Hangman from "./components/Hangman"

const MAX_CHANCES = 9
let initialGameData = []
let initialGameCharacters = []

const getRandomGameData = ()=>{
  const randomIndex = Math.floor(Math.random() * PLAY_DATA.length)
  const randomData = PLAY_DATA[randomIndex]
  return randomData; 
  } 

function App() {
  
  // const [userInput,setUserInput] = useState([])
  const [playerName,setPlayerName] = useState('')
  const [userInput,setUserInput] = useState({
    allInputs:[],
    correctInputs:[],
    wrongInputs:[]
  })

  if(userInput.allInputs.length === 0 && playerName.length === 0){
    initialGameData = getRandomGameData()
    initialGameCharacters = [...new Set(initialGameData.value.toLowerCase())]
  }

  const handleUserInput = (input)=>{
    console.log(userInput)
    let arrayToUpdate = null
    if(initialGameCharacters.includes(input)){
      console.log(input , 'included')
      arrayToUpdate = 'correctInputs'
    } else {
      console.log('not included')
      arrayToUpdate = 'wrongInputs'
    }
    // setUserInput(prev=>[...prev,input])
    setUserInput(prev=>{
     
      let finalObj = { ...prev ,
        allInputs: [...prev.allInputs,input],
        [arrayToUpdate]: [...prev[`${arrayToUpdate}`],input]
      }
      return finalObj
    })
  }

  const handleRestart = ()=>{
    setPlayerName("")
    setUserInput({
      allInputs:[],
      correctInputs:[],
      wrongInputs:[]
    })
  }

  const handlePlayerName = (name)=>{
    setPlayerName(name)
  }

   const userWon = (userInput.correctInputs.length === initialGameCharacters.length) ? true : false
   const gameOver = (userInput.wrongInputs.length - MAX_CHANCES) === 0 ? true : false
  
   console.log(userWon,'playername',playerName)
  
  return (
    <main id="game-container">
      <div id = "players">
        {console.log(playerName)}
        <Player plName={playerName} setPlayerName={handlePlayerName} className="player"/>
      </div>
      {(userInput?.wrongInputs.length > 0) && <Hangman select={userInput?.wrongInputs.length}/>}
      <GameBoard initialData={initialGameData} dataToUpdate={userInput.allInputs}/>
      <UserInput userInput={userInput.allInputs} handleUserInput={handleUserInput}/>
      <GameInfo correctInput={userInput.correctInputs.join(',')} wrongInput={userInput.wrongInputs.join(',')} chances={MAX_CHANCES-userInput.wrongInputs.length}/> 
     {(userWon || gameOver) && <GameOver handleRestart={handleRestart} userWon={userWon} playerName={playerName} answer={initialGameData.value}/>}
    </main>
  )
}

export default App
