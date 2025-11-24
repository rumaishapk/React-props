import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState();
  function times() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(times, 1000);

  return (
    <div>
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
};

export default App;
