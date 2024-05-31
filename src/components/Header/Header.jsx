import React, { useState } from "react";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeHandler = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <header className="header">
        <div className="wrapper header-wrapper">
          <div className="logo">
            <h2>Where in the world?</h2>
          </div>

          <button className="theme-switcher" onClick={themeHandler}>
            {darkTheme ? "Light" : "Dark"} Mode
          </button>
        </div>
      </header>
    </>
  );
}
