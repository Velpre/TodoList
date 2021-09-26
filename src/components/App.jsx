import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [inputState, setInput] = useState("");
  const [newInput, setNewInput] = useState([]);

  function saveItem(e) {
    const newInputValue = e.target.value;
    setInput(newInputValue);
  }

  function addItem() {
    setNewInput((oldItems) => {
      return [...oldItems, inputState];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={saveItem} type="text" value={inputState} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {newInput.map((input, i) => {
            return <TodoItem i={i} input={input} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
