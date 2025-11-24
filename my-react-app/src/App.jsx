import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleclick = () => setCount(count + 1);
  const handleclick2 = () => {
    count == 0 ? null : setCount(count - 1);
  };

  return (
    <div className="box">
      counter
      <br />
      {count}
      <br />
      <button onClick={handleclick}>+</button>
      <button onClick={handleclick2}>-</button>
    </div>
  );
}

export default App;
