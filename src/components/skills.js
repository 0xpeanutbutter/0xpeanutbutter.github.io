import React from "react";
import data from "./../data.json";
const Skills = () => {
  const languages = data.skills.programmingLanguages;
  const db = data.skills.database;
  const frameworks = data.skills.framework;
  return (
    <div>
      <div>
        <strong> Languages :</strong>
        {languages.map((language, index) => (
          <li key={index + 1}>{language}</li>
        ))}
      </div>
      <div>
        <strong>Framework :</strong>
        {frameworks.map((framework, index) => (
          <li key={index + 1}>{framework}</li>
        ))}
      </div>
      <div>
        <strong>Database :</strong>
        {db.map((element, index) => (
          <li key={index + 1}>{element}</li>
        ))}
      </div>
    </div>
  );
};
export default Skills;
