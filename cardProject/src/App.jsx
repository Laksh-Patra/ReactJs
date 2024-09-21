import { useState,useEffect } from 'react'


function App() {
  const [data, setData] = useState([])
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>{
      if(!response.ok){
        throw new Error('Network response was not OK');
      }
      return response.json();//convert the response to json format 
    })
    .then((result)=>{
      setData(result);
      setLoading(false)
    })
    .catch((error)=>{
      setError(error.message)
      setLoading(false);
    })
    
  }, [])
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error:{error}</p>
  

  return (
    <>
     <div className='flex flex-wrap gap-4 items-center justify-center p-4 '>
   {data.map((item) =>(
    <div
      key={item.id}
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Card {item.id}
          </h5>
          <ul>
            <li>
              <b>Id:</b> {item.id}
            </li>
            <li>
              <b>Title:</b><span className='text-white'>{item.title}</span>
            </li>
            <li>
              <b>Body:</b>{item.body}
            </li>
          </ul>
    </div>
   ))
    
   }   

    
</div>

    </>
  )
}

export default App
