import React from 'react'
import FreeGames from './components/freeGames/FreeGames'
import UpComingFreeGames from './components/comingSoon/UpComingFreeGames'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <FreeGames/>
      <UpComingFreeGames/>
    </div>
  )
}

export default App