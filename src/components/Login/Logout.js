import React from "react";
import "./Logout.css";

const Logout = () => {
  return (
    <div>
      <h1>
        Bienvenue <span className="user_name"></span>
        <button className="logout_button">Reterne</button>
      </h1>
    </div>
  );
};

export default Logout;
