import { useContext } from "react";
import HookuseContextGrandChild from "./HookuseContextGrandChild";
import ThemeContext from "./ThemeContext";
import LoggedInContext from "./LoggedInContext";

const HookuseContextChild = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoggedin } = useContext(LoggedInContext);

  return (
    <div>
      <p>Child Component</p>

      <p>
        Accessing Theme from Child Component <b>{isLoggedin}</b>
      </p>
      <p>
        Accessing Theme from Child Component <b>{theme}</b>
      </p>

      <br />
      <hr />
      <HookuseContextGrandChild />
    </div>
  );
};

export default HookuseContextChild;
