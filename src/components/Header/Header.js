import React from "react";
import Menuicon from "../Menuicon";

const Header = ({ setcategory }) => {
  return (
    <div>
      <div className="inshorts-header">
        <div className="icon">
          <Menuicon setcategory={setcategory}></Menuicon>
        </div>
        <img
          style={{ cursor: "pointer", paddingTop: "0.5rem" }}
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png "
          height="80%"
          alt="inshorts-logo"
        />
        <a
          className="github-icon"
          href="https://github.com/Mayank164869"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "10px",
              height: "2rem",
              width: "2rem",
              padding: "3px",
              marginTop: "1.3rem",
              background: "wheat",
              cursor: "pointer",
            }}
            src="https://img.icons8.com/material-sharp/30/000000/github.png"
            alt="github-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
