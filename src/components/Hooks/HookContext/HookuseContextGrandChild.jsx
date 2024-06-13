import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LoggedInContext from "./LoggedInContext";

const HookuseContextGrandChild = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoggedin } = useContext(LoggedInContext);
  return (
    <div>
      <p>Grand Child Component</p>

      <p>
        Accessing Theme from Parent Component <b>{isLoggedin}</b>
      </p>
      <p>
        Accessing Theme from Parent Component <b>{theme}</b>
      </p>
      <br />
      <hr />
    </div>
  );
};

export default HookuseContextGrandChild;
