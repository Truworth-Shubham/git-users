import React,{useState,useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import Userscard from '../components/Userscard'

const Home = () => {

  const [data,setData] = useState("")

  const URL = "http://api.github.com/users"
  const obj = {
    fun: (as)=>setData(as),
    url: URL
  }
  const allUsers = useFetch(obj)

  useEffect(()=>{
    allUsers && allUsers.makeRequest(obj)
  },[])  

  return (

    <div className='home-conatiner'>
      <h1>Git-hub users</h1>
      <div className='card-flex-conatiner'>
        {
          data && data.map((el,index) => {
            return (
              <Userscard data={el} key={index}/>
            )
          })
        }
      </div>
    </div>

  )
}

export default Home