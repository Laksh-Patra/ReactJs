import { useState } from "react"


function useCustom(initalValue=0) {


       const [count, setCount] = useState(initalValue)

       function increment(){
        setCount(count=>count+1)
       }
        function decrement(){
        setCount(count=>count-1)
       }
      

     return [count,increment,decrement]
  
}

export default useCustom
