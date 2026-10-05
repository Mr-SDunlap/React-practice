//  useEffect(function, [dependencies])

import { useState, useEffect } from "react";

function MyComponentTwo() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(innerWidth);
    setHeight(innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `size ${width} x ${height}`;
  }, [width, height]);

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window hieght: {height}px</p>
    </>
  );
}

export default MyComponentTwo;
