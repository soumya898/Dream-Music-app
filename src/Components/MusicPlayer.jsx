import React from 'react'
import Navbar from './Navbar'
import SongList from './SongList'
import MichelJacksonImage from './MichelJacksonImage'
const MusicPlayer = () => {
  return (
    <div className="w-3/5 h-screen bg-gradient-to-b from-[#700F0F] via-[#430100] to-[#120808]">

      <div className="container">
        <Navbar/>
        <MichelJacksonImage/>


        <SongList />




      </div>


    </div>
  )
}

export default MusicPlayer
