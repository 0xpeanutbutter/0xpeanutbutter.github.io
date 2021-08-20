import React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Links from "../components/links";
import Profile from "../components/profile";
import Resume from "../components/resume";
import Skills from "../components/skills";

const Home = () => {
  return (
    <div>
      <center>
        <Profile />
        <About />
        <hr />
        <Skills />
        <Contact />
        <Links />
        <Resume />
      </center>
    </div>
  );
};

export default Home;
