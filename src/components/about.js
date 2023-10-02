import React from "react";
import data from "../data.json";
const About = () => {
  const about = data.about;
  return (
    <div>
      <p>{about.experience}</p>
    </div>
  );
};
export default About;
