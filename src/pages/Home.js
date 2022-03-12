import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/vetd2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Vet Us</h1>
        <p>All kinds of care for all kinds of pets</p>
        
      </div>
    </div>
  );
}

export default Home;
