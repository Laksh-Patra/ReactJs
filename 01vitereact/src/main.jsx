import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'
import React from 'react'

/*
function MyApp(){
  return(
    <div>
      <h1>Custom App 00!</h1>
    </div>
  )
}
*/
const anotherUser="chai aur react"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click Me!',
  anotherUser

)


createRoot(document.getElementById('root')).render(
 
   reactElement
  
)
