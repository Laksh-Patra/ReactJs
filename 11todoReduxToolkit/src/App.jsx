import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import UpdateTodo from './components/UpdateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MY REDUX TOOL KIT</h1>
      <AddTodo/>
      <Todos/>
    
    </>
  )
}

export default App
