import React, { useEffect, useState } from "react";
import HotelCard from "../HotelCard/HotelCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("hotel.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const scrollToDiv = () => {
    const div2 = document.getElementById("Hotels");
    div2.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="hero min-h-screen mb-10 "
        style={{
          backgroundImage:
            "url(https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-al-arab/fallback-image/burj-al-arab-1-dtcm.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Burj Al Arab</h1>
            <p className="mb-5">
              Welcome to the Burj Al Arab - Dubai's iconic symbol of luxury and
              extravagance. In this carousel, we'll take you on a journey
              through one of the most opulent hotels in the world
            </p>

            <button onClick={scrollToDiv} className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div id="Hotels" className="m-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel}></HotelCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
