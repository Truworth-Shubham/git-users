import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Userscard = ({ data }) => {

  const [info, setInfo] = useState(null)

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    try {
      const tempInfo = (await axios.get(data && data.url)).data
      console.log(tempInfo)
      const tempObj = {
        company: tempInfo.company,
        followers: tempInfo.followers,
        following: tempInfo.following,
        articles: tempInfo.public_repos
      }
      setInfo(tempObj)

    } catch (error) {
      console.log("first")
    }
  }

  return (
    <>
      <div className='card-box'>
        <div className='card-image'>
          <img src={data.avatar_url} width='100%' />
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
              <p>{info && info.articles}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userscard