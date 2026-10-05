//  useState() =    re-renders the component when the stat value changes.
//  useRef()   =    Does not cause re-renders when its value changes.
//                  When you want a component to "remember" some information,
//                  but you don't want that information to trigger new renders.

//      1.  Accessing/Interacting with DOM elements
//      2.  Handling Focus, Animations, and Transitions
//      3.  Managing Timers and Intervals

import { useState, useEffect, useRef } from "react";

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component rendered");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }
  return (
    <>
      <button onClick={handleClick1}>Click Me 1</button>
      <input type="text" ref={inputRef1} />
      <br />
      <br />
      <button onClick={handleClick2}>Click Me 2</button>
      <input type="text" ref={inputRef2} />
      <br />
      <br />
      <button onClick={handleClick3}>Click Me 3</button>
      <input type="text" ref={inputRef3} />
    </>
  );
}
export default MyComponent;
