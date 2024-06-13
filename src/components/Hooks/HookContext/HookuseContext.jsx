import React, { useState } from "react";

import ThemeContext from "./ThemeContext";
import LoggedInContext from "./LoggedInContext";
import HookuseContextChild from "./HookuseContextChild";

const HookuseContext = () => {
  const [theme, setTheme] = useState("Dark");
  const [isLoggedin, setIsLoggedIn] = useState("Siva");

  return (
    <ThemeContext.Provider value={{ theme }}>
      <LoggedInContext.Provider value={{ isLoggedin }}>
        <b>useContext</b>
        <p>Parent Component</p>
        <p>
          Accessing USER from Parent Component <b>{isLoggedin}</b>
        </p>
        <p>
          Accessing Theme from Parent Component <b>{theme}</b>
        </p>
        <br />
        <hr />
        <HookuseContextChild />
      </LoggedInContext.Provider>
    </ThemeContext.Provider>
  );
};

export default React.memo(HookuseContext);
