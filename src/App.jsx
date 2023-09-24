import React from 'react'
import FreeGames from './components/freeGames/FreeGames'
import UpComingFreeGames from './components/comingSoon/UpComingFreeGames'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <FreeGames/>
      <UpComingFreeGames/>
      <Footer/>
    </div>
  )
}

export default App