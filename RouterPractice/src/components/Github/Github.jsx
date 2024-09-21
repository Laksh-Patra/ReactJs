import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Laksh-Patra')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setdata(data)
    //     })
      
    
      
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture"  width={300}/>
        </div>
       
  )
}

export default Github

// loaders.js
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Laksh-Patra');
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
  };
  