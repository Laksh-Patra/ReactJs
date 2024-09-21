import { useState } from 'react'
import Header from './Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name="Laksh"/>
      <Header name="Patra"/>
    </>
  )
}

export default App
