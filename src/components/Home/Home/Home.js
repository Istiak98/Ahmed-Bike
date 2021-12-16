import React from "react";
import About from "../About/About";
import Explore from "../Explore/Explore";
import Header from "../Header/Header";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
  return (
    <div>
      <Header />
      <About></About>
      <Explore />
      <Sponsors></Sponsors>
    </div>
  );
};

export default Home;
