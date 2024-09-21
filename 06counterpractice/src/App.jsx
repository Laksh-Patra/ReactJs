import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
 

  const incrementCounter= ()=>{
    if(count<20){
      setCount(count=>count+1);
      setCount(count=>count+1);
      setCount(count=>count+1);
      setCount(count=>count+1);
      setCount(count=>count+1);
    }
  
  }
  const decrementCounter= ()=>{
    if(count>0){
      setCount(count=>count-1);
      setCount(count=>count-1);
      setCount(count=>count-1);
      setCount(count=>count-1);
      setCount(count=>count-1);

    }
    
  }

  return (
   
   
    <div className='flex justify-center items-center flex-col gap-10 '>
      <h1 className='text-yellow-50 font-semibold text-2xl mx-6 my-20 '>Counter Meter :{count}</h1>
      <button onClick={incrementCounter}  className='one bg-red-400 font-bold px-4 py-4 rounded-lg '>Increment :{count}</button>
      <button onClick={decrementCounter}className='one bg-red-400 font-bold px-4 py-4 rounded-lg'>Decrement:{count}</button>
    </div>
  
  )
}

export default App
