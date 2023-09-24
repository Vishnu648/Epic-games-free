import React from 'react'
import useFetch from '../../utils/useFetch';
import styles from './freeGames.module.css'

const FreeGames = () => {

  const { games } = useFetch("epic-free-games")

  return (
    <div className={styles.freeGamesContainer}>
      <h2>Free Games</h2>
      <div className={styles.gameContainer}>
          {games.map((game) => {
            return (
              <div title={game.name} className={styles.card}>
                <img src={game.offerImageTall} className={styles.imgCard} alt="free-game" />
                <div className={styles.details}>
                  <p id={styles.name}>{game.name}</p>
                  <p>by</p>
                  <p id={styles.publisher}>{game.publisher}</p>
                </div>

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