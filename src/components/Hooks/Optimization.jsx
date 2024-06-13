import React, { useState, useMemo, useEffect } from "react";

const Optimization = () => {
  const [val, setVal] = useState(0);

  const expensiveFunction = () => {
    // for (let i = 0; i < 100000; i++) {}

    console.log("Expensive function called");
  };

  //   useEffect(() => {
  //     expensiveFunction();
  //   }, [val]);

  return (
    <div>
      <h4>Optimizing using useMemo & useCallback Hooks</h4>
      <br />
      <br />

      <p>value {val}</p>

      <button onClick={() => setVal(val + 1)}>Increase</button>
    </div>
  );
};

export default React.memo(Optimization);
