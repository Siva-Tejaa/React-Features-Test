import React, { useState, useRef } from "react";

const HookuseRef = () => {
  //   const n = useRef(0);

  //   useEffect(() => {
  //     console.log("Component Rerendered");
  //   });

  const countRef = useRef(0);
  const [render, setRender] = useState(false);

  const increment = () => {
    countRef.current += 1;
    console.log(`Count: ${countRef.current}`);
  };

  const forceRender = () => {
    setRender((prev) => !prev);
  };

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={forceRender}>Force Render</button>
    </div>
    // <div>
    //   <b>useRef Hook</b>

    //   <p>Hi Hello</p>
    //   <p ref={n}>{n.current}</p>
    //   <p>Andhriki Namaskaram</p>

    //   <button onClick={() => (n.current = n.current + 1)}>
    //     Click here to change
    //   </button>
    // </div>
  );
};

export default React.memo(HookuseRef);
