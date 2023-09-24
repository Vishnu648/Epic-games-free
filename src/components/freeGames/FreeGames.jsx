import React from 'react'
import useFetch from '../../utils/useFetch'

const FreeGames = () => {

    const {games}=useFetch("epic-free-games")

  return (
    <div>
        <h2>Free Games</h2>
        <div>
            {games.map((game) => {
              return(
                <div>
                    <img src={game.offerImageTall} height={100} width={100} alt="free-game" />
                    <p>{game.name}</p>
                    <h4>{game.originalPrice}</h4>
                </div>
              )
            }
            )}
        </div>
        
    </div>
  )
}

export default FreeGames

// /epic-free-games