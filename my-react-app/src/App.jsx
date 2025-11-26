import React, { useState } from "react";

const App = () => {
  const [headingText, setHeadingText] = useState("hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("submitted");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handlemouseOout() {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handlemouseOout}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
