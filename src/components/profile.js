import React from "react";
import data from "../data.json";
const Profile = () => {
  const profile = data.profile;
  return (
    <div className="profile">
      <img
        id="port"
        src="https://avatars.githubusercontent.com/u/53396920?v=4"
        alt="missing"
      />
      <p>
        <strong>{profile.name}</strong>
      </p>
      <p>{profile.bio}</p>
      <p></p>
    </div>
  );
};
export default Profile;
