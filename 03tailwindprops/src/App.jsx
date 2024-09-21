import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"hitesh",
    age:21
  }
  let newArr=[1,2,3];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwin Test</h1>
      <Card channel="LAKSH PATRA" someObject={newArr} />   <Card channel="Saket"/>

      <Card channel="Pooja" about="My first page"/>

    </>
  )
}

export default App
