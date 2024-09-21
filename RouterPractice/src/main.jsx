import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
     children:[
      {
         path:"",
         element:<Home/>
        
       },
    
       {
      path:"about",
       element:<About/>
     },
     {
        path:"contact",
        element:<Contact/>
      },
      {
        path:'user/:userid',
        element:<User/>
      },
      {
      
        path:'github',
        element:<Github/>,
        loader:githubInfoLoader
      },
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
