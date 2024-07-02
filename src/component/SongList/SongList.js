import React from "react";
import "./songList.css";
import songsData from "../../data/data";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const SongList = ({ setSelectedSong }) => {

  console.log('setSelectedSong:', setSelectedSong);
  return (
    <div>
      <ul className="song-list">
        {songsData.map((song, index) => (
          <li key={index} className="song-list-item">
            <button className="song-button" onClick={() => setSelectedSong(song)}>
              <PlayCircleFilledWhiteOutlinedIcon className="song-icon" />
              <h2 className="song-name">{song.title}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div> 
  );
};

export default SongList;
