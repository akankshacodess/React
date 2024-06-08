import { useCallback, useEffect, useRef, useState } from 'react';


function App() {
  const [length, setLength]= useState(8)
  const [numYes, setNumYes]=useState(false);
  const [spclCharYes, setSpclCharYes]=useState(false);
  const [Password, setPassword]=useState("");

  const passRef= useRef(null)

  const passwordGen = useCallback(()=>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyz"
    if(numYes) str+= "0123456789" 
    if(spclCharYes) str+= "!#@$%^&*_/?" 

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numYes, spclCharYes, setPassword])

  const copyPass = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=> {passwordGen()},[length, numYes,spclCharYes,passwordGen])
  return(
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-5 my-10 text-white bg-gray-800'>
        <h1 className='text-4xl text-center text-white my-4'>Password Generator</h1> 
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
          type="text"
          value={Password}
          className="outline-none w-full text-orange-500 font-bold px-6 py-3 bg-white"
          placeholder="password"
          readOnly
          ref={passRef}
          />

          <button onClick={copyPass} className='bg-red-600 text-white px-3 py-0.5 shrink-0 mx-3 rounded-sm'>Copy</button>
        </div>
      
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={40}
              value={length}
              className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length:{length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numYes}
            id='numberInput'
            onChange={()=> {setNumYes((prev)=> !prev);
            }}/>
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={spclCharYes}
            id='numberInput'
            onChange={()=> {setSpclCharYes((prev)=> !prev);
            }}/>
            <label htmlFor="numberInput"> Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
