import React, { useState } from 'react'
import './songCard.css'
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const SongCard = ({song, setSelectedSong}) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="song-card">
      <div className="image-container">
        <img
          src={song.image}
          alt={song.title}
          className="song-image"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        />
        <div
          className={`overlay ${isHovered ? 'hovered' : ''}`}
        >
          <button className="play-button" onClick={() => setSelectedSong(song)} >
           <PlayCircleFilledWhiteIcon />
          </button>
        </div>
      </div>
      <div className="song-info">
        <h3 className="song-title">{song.title}</h3>
      </div>
    </div>
  );
}

export default SongCard
