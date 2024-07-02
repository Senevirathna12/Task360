import React from "react";
import "./sideBar.css";
import logo from "../../assests/images/logo_128.png";
import SongList from "../SongList/SongList";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">CodingRadio</h1>
      </div>
      <div className="sidebar-content">
        <SongList />
      </div>
    </div>
  );
};

export default SideBar;
