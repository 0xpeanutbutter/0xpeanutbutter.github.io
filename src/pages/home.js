import React from "react";
import About from "../components/about";
import Links from "../components/links";
import Profile from "../components/profile";
import Skills from "../components/skills";

const Home = () => (
  <div>
    <center>
      <br />
      <br />
      <Profile />
      <hr />
      <About />

      <Skills />
      <Links />
    </center>
  </div>
);

export default Home;
