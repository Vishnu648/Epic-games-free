import React from 'react'
import useFetch from '../../utils/useFetch';
import styles from './upComingFreeGame.module.css'

const UpComingFreeGames = () => {

    const {games}=useFetch("epic-free-games-coming-soon")

  return (
    <div className={styles.upComingFreeGame}>
        <h2>Free Games coming soon</h2>
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

export default UpComingFreeGames

// epic-free-games-coming-soon