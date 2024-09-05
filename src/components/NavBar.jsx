import React, { useState } from "react";

const NavBar = () => {
  const num = 5;
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{num}</p>
      <div>NavBar</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default NavBar;
