// Controls.js
import React from "react";

const Controls = ({ currentTrack }) => {
  if (!currentTrack) return null;

  return (
    <div>
      <p>Playing: {currentTrack.name}</p>
      {/* Add play, pause, next, and previous buttons as needed */}
    </div>
  );
};

export default Controls;
