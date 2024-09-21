import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData();
    // const[data,setData]=useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Laksh-Patra')
    //  .then(response =>response.json())
    //  .then(data =>{
    //     setData(data)

    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 text-black p-4 text-3xl'>Github followers:{data.followers}
     <div className='flex items-center justify-center border-y-0'>
     <img  src={data.avatar_url} alt="Git picture" width={300} />
     </div>
    
    </div>
   
  )
}

export default Github

export const githubInfoLoader = async () =>{

   const response = await fetch('https://api.github.com/users/Laksh-Patra')
   return response.json();

}