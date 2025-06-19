import React, { useEffect, useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");// whole control give to react
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData") || [])
  );

  function handleAdd() {
    setTodolist([...todolist, inputText]);
    setInputText("");
  }

  console.log(todolist);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div>
      <h1>Todolist</h1>
      <input
        value={inputText}
        type="text"
        placeholder="Enter you task"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <div>
        {todolist.map((item) => {
          return (
            <div>
              <p>{item}</p>
              <button>edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
