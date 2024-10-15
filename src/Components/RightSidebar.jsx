import React, { useContext, useState, useRef, useEffect } from 'react';
import { MusicContext } from './MusicContext'; // Import the context

const RightSidebar = () => {
    const { currentTrack, playTrack, pauseTrack, nextTrack, previousTrack, isPlaying } = useContext(MusicContext);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const cardRef = useRef(null);
    const audioRef = useRef(new Audio());

    // Handle mouse events for dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        cardRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newX = e.clientX - cardRef.current.offsetWidth / 2;
            const newY = e.clientY - cardRef.current.offsetHeight / 2;
            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        cardRef.current.style.cursor = 'grab';
    };

    // Update playback time and duration
    useEffect(() => {
        if (currentTrack && audioRef.current.src !== currentTrack.preview_url) {
            audioRef.current.src = currentTrack.preview_url;
            audioRef.current.load();
            setDuration(0);
            setCurrentTime(0);
        }

        const handleDurationChange = () => {
            setDuration(audioRef.current.duration);
        };

        const updateCurrentTime = () => {
            setCurrentTime(audioRef.current.currentTime);
        };

        audioRef.current.addEventListener('durationchange', handleDurationChange);
        const updateInterval = setInterval(updateCurrentTime, 1000);

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        return () => {
            clearInterval(updateInterval);
            audioRef.current.pause();
            audioRef.current.removeEventListener('durationchange', handleDurationChange);
        };
    }, [isPlaying, currentTrack]);

    // Play/Pause functionality
    const handlePlayPause = () => {
        isPlaying ? pauseTrack() : playTrack();
    };

    // Handle seeking
    const handleSeek = (e) => {
        const seekTime = (e.target.value * duration) / 100;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    // Format time from seconds to MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Generate a random duration for testing if duration is not set
    const getRandomDuration = () => Math.floor(Math.random() * 300) + 30; // Random duration between 30 and 330 seconds

    return (
        <div className="w-1/5 h-screen" style={{ background: 'rgba(32, 10, 10, 1)' }}>
            <div
                className="card"
                ref={cardRef}
                style={{
                    position: 'absolute',
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '300px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 1000,
                    cursor: 'grab',
                    textAlign: 'center',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // Handle when the mouse leaves the card
            >
                {currentTrack ? (
                    <div>
                        <h3 style={{ marginBottom: '10px', color: '#fff' }}>{currentTrack.name}</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                            <img
                                src={currentTrack.album.images[0]?.url}
                                alt={currentTrack.name}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '5px',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '10px', color: '#fff' }}>
                            <span>{currentTrack.album.name}</span>
                        </div>
                        <div>
                            <button style={controlButtonStyle} onClick={previousTrack}>⏮️</button>
                            <button style={controlButtonStyle} onClick={handlePlayPause}>
                                {isPlaying ? '⏸️' : '▶️'}
                            </button>
                            <button style={controlButtonStyle} onClick={nextTrack}>⏭️</button>
                        </div>
                        {/* Playback Time and Progress Bar */}
                        <div style={{ margin: '10px 0', color: '#fff' }}>
                            <span>{formatTime(currentTime)} / {duration ? formatTime(duration) : formatTime(getRandomDuration())}</span>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={duration ? (currentTime / duration) * 100 : 0}
                                onChange={handleSeek}
                                style={{ width: '100%', marginTop: '5px' }}
                            />
                        </div>
                    </div>
                ) : (
                    <p style={{ color: '#fff' }}>No track selected</p>
                )}
            </div>
        </div>
    );
};

const controlButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '24px',
    color: '#fff',
    cursor: 'pointer',
    margin: '0 10px',
};

export default RightSidebar;
