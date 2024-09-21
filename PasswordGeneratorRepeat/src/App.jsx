import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed)str+="!@#$%^&*"

    for (let i = 1; i <= array.length; i++) {
      let char=Math.floor(Math.random()*str.length +1)
      pass = str.charAt(char)
    }
    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
   
<div className='w-full max-w-md mx-auto my-56 shadow-md rounded-lg  px-4 py-8 bg-gray-700'>
  <h1 className='font-extrabold  text-white text-center my-3'>Password Generator</h1>
  <div className='className=" flex shadow rounded-lg overflow-hidden mb-4"'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    
    />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
  </div> 
  <div className="flex text-sm gap-x-2">
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) =>{setLength(e.target.value)}}
      />
      <label >Length:{length}</label>


    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      
      />

    </div>
  </div>

</div>
    
    </>     
  )
}

export default App
