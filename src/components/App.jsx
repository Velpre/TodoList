import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
 
  const [newInput, setNewInput] = useState([]);

  function addItem(inputState,setInput) {
    setNewInput((oldItems) => {
      return [...oldItems, inputState];
    });
  }

  function deliteItem(i) {
    setNewInput((prevValue) => {
      return prevValue.filter((items, index) => {
        return index !== i;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea add={addItem}/>

      <div>
        <ul>
          {newInput.map((input, i) => {
            return (
              <TodoItem key={i} id={i} input={input} onChecked={deliteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
