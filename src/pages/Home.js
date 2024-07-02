import React, { useState } from "react";
import "./home.css";
import SideBar from "../component/SideBar/SideBar";
import MainContent from "../component/MainContent/MainContent";
import Footer from "../component/Footer/Footer";

const Home = () => {

  const [selectedSong, setSelectedSong] = useState(null);
  return (
    <div className="home-content">
      <div className="home">
        <SideBar setSelectedSong={setSelectedSong}/>
        <MainContent setSelectedSong={setSelectedSong}/>
      </div>
      <div>
        <Footer selectedSong={selectedSong}/>
      </div>
    </div>
  );
};

export default Home;
