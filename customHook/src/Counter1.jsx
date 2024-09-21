import React from 'react'
import useCustom from './useCustom'


function Counter1() {
    const [count,increment,decrement] = useCustom(10)
  return (
    <>
        <div>{count}</div>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter1
