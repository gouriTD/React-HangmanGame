import React,{useState} from 'react'

function Player({plName, setPlayerName,restart,...props}) {
    const [isSelected,setIsSelected] = useState(false)
    const [inputName,setInputName] = useState(plName)
    
    console.log(inputName,plName)
    
    const handleSubmit = (e)=>{
      console.log(`handleSubmit called`)
      e.preventDefault()
      if(isSelected){
        setPlayerName(inputName)
      }
      setIsSelected(prevVal=>!prevVal)
    }

  return (
    <li {...props}>
      <form action="#" onSubmit={handleSubmit}>
        
        <span>
          <span>Player :</span>
            {
            isSelected ? 
            <input type='text' value={inputName} onChange={(e)=>setInputName(e.target.value)} required/> : 
            <span className='player-name'>{!plName ? plName:inputName}</span>
            }
          
          <button type="submit" >{isSelected ? 'Save':'Edit'}</button>
        </span>
      </form> 
    </li>
  )
}

export default Player