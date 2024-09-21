import React from 'react'
import useCustom from './useCustom'
function Counter2() {
    const [count,increment,decrement] = useCustom()
  return (
    <div>
       <div>{count}</div>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter2
