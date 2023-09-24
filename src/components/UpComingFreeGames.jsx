import React from 'react'
import useFetch from '../utils/useFetch'

const UpComingFreeGames = () => {

    const {data}=useFetch("epic-free-games-coming-soon")

  return (
    <div>
        <h2>Free Games coming soon</h2>
        <p>{'coming soon'}</p>
        {console.log("coming soon-",data)}
    </div>
  )
}

export default UpComingFreeGames

// epic-free-games-coming-soon