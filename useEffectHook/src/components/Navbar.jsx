import React, {useEffect} from 'react'

function Navbar({color}) {
     // Cse 1 : Run on every render
  useEffect(() => {
    alert("Hey  I will run on every render")
  })

  //Case 2 : Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page first Render")
  }, [])
 
 //Case 3 : Run only when certain values changes
 useEffect(() => {
  alert("Hey I was runing because of color change")
}, [color])

// Exaple of cleanup function
useEffect(() => {
  
    alert("This is first render of app.jsx")

  return () => {
    alert("Component is unmounted")
  }
}, [])


  return (
    <div>
      This is {color}Navbar
    </div>
  )
}


export default Navbar;
