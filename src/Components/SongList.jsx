

import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { MusicContext } from "./MusicContext"; // Import the context
import { Howl } from "howler";
import Controls from "./Controls";

const SongList = () => {
  const { tracks, setTracks, currentTrack, setCurrentTrack } = useContext(MusicContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sound, setSound] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered index

  const CLIENT_ID = "538717ac94e943189c494c08716c6099";
  const CLIENT_SECRET = "98c9ccb287d0477394c7cad66a84455b";
  const TOKEN_URL = "https://accounts.spotify.com/api/token";
  const ARTIST_ID = "3fMbdgg4jU18AjLCKBhRSm"; // Example artist ID for Michael Jackson
  const TRACKS_URL = `https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=US`;

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tokenResponse = await axios.post(
          TOKEN_URL,
          new URLSearchParams({
            grant_type: "client_credentials",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            },
          }
        );

        const accessToken = tokenResponse.data.access_token;

        const response = await axios.get(TRACKS_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setTracks(response.data.tracks.slice(0, 4)); // Limit to 4 songs
        setLoading(false);
      } catch (error) {
        setError("Error fetching tracks");
        setLoading(false);
      }
    };

    fetchTracks();
  }, [setTracks]);

  const handleTrackClick = (track) => {
    // Only play if the clicked track is different from the current one
    if (currentTrack?.id !== track.id) {
      if (sound) {
        sound.stop(); // Stop previous track if it's playing
      }
      setCurrentTrack(track);
      playTrack(track);
    }
  };

  const playTrack = (track) => {
    const newSound = new Howl({
      src: [track.preview_url],
      html5: true,
      onend: () => {
        // Automatically play next track when current ends
        // You might want to handle this to play the next track in the list
      },
    });

    newSound.play();
    setSound(newSound);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const trackId = e.dataTransfer.getData("text/plain");
    const draggedTrack = tracks.find((track) => track.id === trackId);
    if (draggedTrack) {
      const updatedTracks = [...tracks];
      const fromIndex = tracks.findIndex((track) => track.id === trackId);
      updatedTracks.splice(fromIndex, 1); // Remove dragged track
      updatedTracks.splice(index, 0, draggedTrack); // Insert at new position
      setTracks(updatedTracks);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  if (loading) return <div style={{ color: "#fff" }}>Loading...</div>;
  if (error) return <div style={{ color: "#fff" }}>{error}</div>;

  return (
    <div style={{  position: "relative", padding: "30px", backgroundColor: "transparent", color: "#fff" }}>
      <h1 style={{ marginLeft:'15px',textAlign: "left" ,fontFamily:'Poppins' }}>Popular</h1>
      <p style={{ textAlign: "end" ,fontFamily:'Poppins',marginRight:'15px ' }}>See All</p>
      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "transparent" }}>
        <thead>
          <tr>
            <th style={headerStyle}>#</th>
            <th style={headerStyle}>Image</th>
            <th style={headerStyle}>Title</th>
            <th style={headerStyle}>Duration</th>
            <th style={headerStyle}>Album</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, index) => (
            <tr
              key={track.id}
              style={{
                ...rowStyle,
                backgroundColor: hoveredIndex === index ? "tomato" : "transparent", 
              }}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", track.id)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
              onClick={() => handleTrackClick(track)}
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
              onMouseLeave={() => setHoveredIndex(null)} // Clear hovered index
            >
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>
                <img src={track.album.images[0]?.url} alt={track.name} style={imageStyle} />
              </td>
              <td style={cellStyle}>{track.name}</td>
              <td style={cellStyle}>{(track.duration_ms / 1000).toFixed(0)}s</td>
              <td style={cellStyle}>{track.album.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Controls currentTrack={currentTrack} playTrack={playTrack} />
    </div>
  );
};

const headerStyle = {
  padding: "5px",
  backgroundColor: "transparent",
  textAlign: "left",
  color: "#fff",
  fontWeight: "bold",
};

const rowStyle = {
  borderBottom: "1px solid #333",
  cursor: "pointer",
};

const cellStyle = {
  padding: "8px",
  textAlign: "left",
};

const imageStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "5px",
};

export default SongList;
