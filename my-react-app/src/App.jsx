import React, { useState } from "react";

const App = () => {
  const [InputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange() {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(){
     setItem((prevItems) => {
         return[...prevItems,InputText]
     })
     setInputText("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={InputText} />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoitem) => {
            return <li>{todoitem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
