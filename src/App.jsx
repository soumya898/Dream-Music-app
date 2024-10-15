// App.js
import React from 'react';
import LeftSidebar from './Components/LeftSidebar';
import RightSidebar from './Components/RightSidebar';
import MusicPlayer from './Components/MusicPlayer';
import { MusicProvider } from "./Components/MusicContext";


const App = () => {
  return (
    <MusicProvider>
      <div className='flex'>
        <LeftSidebar />
        <MusicPlayer />
        <RightSidebar />
      </div>
    </MusicProvider>
  );
};

export default App;
