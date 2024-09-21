import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setindex] = useState(0);
   function increseCounter(){
    
   
   
   if(counter<20){
    setindex(counter => counter+1);
    setindex(counter => counter+1);
    setindex(counter => counter+1);
    setindex(counter => counter+1);
   
  }
  if(counter==20){
    alert("Value not greater than 20");
  }


   }
   function decreaseCounter(){
    
   
   
    if(counter>0){
      setindex(counter-1);
      
    }
   if(counter==0){
    alert ("Value not less tha 0");
 
   }
    }
  
 

  return (
    <>
    
      <h1>Counter : {counter}</h1>
       <button onClick={increseCounter}>Increment : {counter}</button>
      <br />
      <button onClick={decreaseCounter}>Decrement : {counter}</button> 
     
    </>
  )
}

export default App
