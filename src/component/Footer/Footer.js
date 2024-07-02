import React from "react";
import "./footer.css";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const Footer = ({ selectedSong }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {selectedSong ? (
            <>
              <span className="footer-content-left-span">
                {selectedSong.title}
              </span>
              <span className="footer-content-left-span">
                {selectedSong.artist}
              </span>
            </>
          ) : (
            <>
              <span className="footer-content-left-span">
                Select a Playlist ☝️
              </span>
              <span className="footer-content-left-span">
                Then we'll start playing it 🙌
              </span>
            </>
          )}
        </div>
        <div className="footer-content-middle">
          <VolumeDownIcon />
          <SkipPreviousIcon />
          <PlayCircleFilledWhiteIcon className="play-song" />
          <SkipNextIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
