import React from 'react'
import './songList.css'
import songsData from "../../data/data";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";


const SongList = () => {
  // const [currentSongUrl, setCurrentSongUrl] = React.useState(null);
  // const [isPlaying, setIsPlaying] = React.useState(false);

  // const playSong = (soundUrl) => {
  //   setCurrentSongUrl(soundUrl);
  //   setIsPlaying(true);
  // };

  // const handleEnded = () => {
  //   setIsPlaying(false);
  // };

  return (
    <div>
      <ul className="song-list">
        {songsData.map((song, index) => (
          <li key={index} className="song-item">
            <button className="song-button" onClick={() => {}}>
              <PlayCircleFilledWhiteOutlinedIcon className="song-icon" />
              <h2 className="song-title">{song.title}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList
