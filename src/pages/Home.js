import React from 'react'
import useFetch from '../hooks/useFetch'
import Userscard from '../components/Userscard'

const Home = () => {

  const URL = "http://api.github.com/users"
  const allUsers = useFetch(URL)

  return (

    <div className='home-conatiner'>
      <h1>Git-hub users</h1>
      <div className='card-flex-conatiner'>
        {
          allUsers && allUsers.map((el) => {
            return (
              <Userscard data={el} />
            )
          })
        }
      </div>
    </div>

  )
}

export default Home