import React from "react";
import data from "../data.json";
const Links = () => {
  const links = data.contact;
  return (
    <div>
      <strong>Contact : </strong>
      {Object.entries(links).map(([key, value]) => (
        <li key={key}>
          <a href={value}>{key}</a>
        </li>
      ))}
    </div>
  );
};
export default Links;
