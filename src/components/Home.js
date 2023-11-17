import React from 'react'
import useFetch from '../hooks/useFetch'
import Userscard from './Userscard'

const Home = () => {

  const URL = "https://api.github.com/users"
  const allUsers = useFetch(URL)
  
  return (

    <div className='home-conatiner'>
      <h1>Git-hub users</h1>
      <div className='card-flex-conatiner'>
        {
          allUsers && allUsers.map((e) => {
            return (
              <Userscard data={e} />
            )
          })
        }
      </div>
    </div>
    
  )
}

export default Home