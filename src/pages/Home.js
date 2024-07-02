import React from "react";
import "./home.css";
import SideBar from "../component/SideBar/SideBar";
import MainContent from "../component/MainContent/MainContent";
import Footer from "../component/Footer/Footer";
const Home = () => {
  return (
    <div className="home-content">
      <div className="home">
        <SideBar />
        <MainContent />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
