import React from 'react'
import useFetch from '../utils/useFetch'

const FreeGames = () => {

    const {data}=useFetch("epic-free-games")

  return (
    <div>
        <h2>Free Games</h2>
        <p>{'free Games'}</p>
        {console.log("free-",data)}
        
    </div>
  )
}

export default FreeGames

// /epic-free-games