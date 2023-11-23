import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Userscard = ({ data }) => {

  const [info, setInfo] = useState(null)

  const {makeRequest} = useFetch()

  const obj = {
    fun: (as) => setInfo(as),
    url: data.url
  }

  useEffect(() => {
    makeRequest(obj)
  }, [])

  return (
    <>
      <div className='card-box'>
        <div className='card-image'>
          <img src={data.avatar_url} width='100%' alt='not found' />
        </div>
        <div className='card-info-main'>
          <h3>{data.login}</h3>
          <p>{data.type}</p>
          <div className='card-info-activities'>
            <div>
              <h5>Followers</h5>
              <p>{info && info.followers}</p>
            </div>
            <div>
              <h5>Following</h5>
              <p>{info && info.following}</p>
            </div>
            <div>
              <h5>Articles</h5>
              <p>{info && info.public_repos}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userscard