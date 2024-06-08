import { useState } from 'react'
import './App.css'

function App() {

  let[counter, setCounter] = useState(0)

  
  // let counter = 0
  const addValue = () =>{
    if(counter!=50){
      setCounter(counter+1)
    }
    return
  }

  const removeValue = ()=> {
    if(counter!=0){
      setCounter(counter -1)
    }
    return
  }
  return (
    <>
      <h1>I am a Counter</h1>
      <h2>Counter value: {counter}</h2>
      <h5>Counter runs between [0,50] and backwards </h5>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick= {removeValue}>Remove value</button>
    </>
  )
}

export default App
