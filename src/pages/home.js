import React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Links from "../components/links";
import Profile from "../components/profile";
import Skills from "../components/skills";

const Home = () => {
  return (
    <div>
      <center>
        <br />
        <br />
        <Profile />
        <About />
        <hr />
        <Skills />
        <Contact />
        <Links />
      </center>
    </div>
  );
};

export default Home;
