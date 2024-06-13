import React from "react";

import { Link } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByValue,
} from "../redux/features/counterSlice";

import { changeThemeHandler } from "../redux/features/themeSlice";

const Home = () => {
  const counterValue = useSelector((state) => state.counterSlice.value);

  const darkMode = useSelector((state) => state.themeSlice.isDarkMode);

  const dispatch = useDispatch();

  const nav = [
    {
      name: "useState",
      link: "/usestate",
    },
    {
      name: "useeffect",
      link: "/useeffect",
    },
    {
      name: "useContext",
      link: "/usecontext",
    },
    {
      name: "useRef",
      link: "/useref",
    },
    {
      name: "Optimization",
      link: "/optimization",
    },
    {
      name: "CRUD/TODO",
      link: "/crud",
    },
    {
      name: "All Products",
      link: "/allproducts",
    },
  ];

  return (
    <div>
      <p>Home Page for Testing</p>

      <nav style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {nav.map((item) => (
          <Link to={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
      </nav>

      <br />
      <br />
      <br />

      <h1>{counterValue}</h1>

      <br />

      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(incrementByValue(10))}>
        Increment By 10
      </button>

      <br />
      <br />
      <hr />
      <p>{darkMode ? "🤍" : "🩶"}</p>
      <button onClick={() => dispatch(changeThemeHandler())}>
        ChangeTheme
      </button>
    </div>
  );
};

export default React.memo(Home);
