// src/Components/MusicContext.js
import React, { createContext, useState, useEffect } from "react";
import { Howl } from "howler";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (sound) {
      sound.stop(); // Stop the current sound instance
    }

    if (currentTrack) {
      const newSound = new Howl({
        src: [currentTrack.preview_url],
        html5: true,
        onend: () => {
          nextTrack(); // Play the next track when the current one ends
        },
      });

      setSound(newSound); // Set the new sound instance
      newSound.play(); // Start playing the new track
      setIsPlaying(true); // Update the playing state
    }

    return () => {
      if (sound) {
        sound.unload(); // Cleanup the sound instance on unmount
      }
    };
  }, [currentTrack]);

  const playTrack = () => {
    if (sound) {
      sound.play();
      setIsPlaying(true);
    }
  };

  const pauseTrack = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const currentIndex = tracks.indexOf(currentTrack);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
  };

  const previousTrack = () => {
    const currentIndex = tracks.indexOf(currentTrack);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[prevIndex]);
  };

  return (
    <MusicContext.Provider value={{ tracks, setTracks, currentTrack, setCurrentTrack, playTrack, pauseTrack, nextTrack, previousTrack, isPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};



