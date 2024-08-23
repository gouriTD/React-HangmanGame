import React, { useState } from 'react'

const UserInput = ({userInput,handleUserInput})=>{
    const[inputVal,setInputVal] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!userInput.includes(inputVal))
        {
          handleUserInput(inputVal)
        }
        setInputVal("")
    }
  return (
    <form action="#" onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="user_input" 
        value={inputVal}
        pattern="[A-Za-z]{1}"
        title='Only single alphabet allowed[A-Za-z]'
        // We need to store the user input value as lowercase so that character comparision becomes easier.
        onChange={(e)=>setInputVal(e.target.value.toLocaleLowerCase())}
        required
        />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UserInput
