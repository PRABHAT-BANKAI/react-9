import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [inputText, setInputText] = useState(""); // whole control give to react
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData") || [])
  );
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  function handleAdd() {
    if (!inputText.trim()) {
      alert("please first you have to fill input text");
      return;
    }
    setTodolist([...todolist, inputText]);
    setInputText("");
  }
  function handleDelete(index) {
    let filterData = todolist.filter((item, i) => index != i);
    setTodolist(filterData);
  }
  function handleEdit(index) {
    setInputText(todolist[index]);
    setEditIndex(index);
    setBoolean(true);
  }

  function handleUpdate() {
    let updateData = todolist.map((item, i) =>
      i == editIndex ? inputText : item
    );
    setTodolist(updateData);

    setInputText("");
    setBoolean(false);
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
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      <div>
        {todolist.map((item, index) => {
          return (
            <div>
              <p>{item}</p>
              <button
                onClick={() => {
                  handleEdit(index);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <Card/>
    </div>
  );
};

export default App;
