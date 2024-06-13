import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(2);

  //Without Dependency
  //   useEffect(() => {
  //     console.log("use EFFECT");
  //   });

  //With Dependency
  //   useEffect(() => {
  //     console.log("use EFFECT");
  //   }, []);

  //With Variable Dependency
  useEffect(() => {
    console.log("Count 1 changed use EFFECT");

    return () => {
      console.log("clean up Function");
    };
  }, [count1]);

  return (
    <div>
      <b>use EFFECT</b>
      <br />
      <br />

      <p>{count}</p>
      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount1(count1 + 1)}>Increment 1</button>
    </div>
  );
};

export default React.memo(HookUseEffect);
