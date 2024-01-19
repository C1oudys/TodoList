import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const titleSaveHandler = (event) => {
    setTitle(event.target.value);
  };
  const textSaveHandler = (event) => {
    setText(event.target.value);
  };

  const addButtonClickHandler = () => {
    const newTodo = { id: todos.length + 1, title, text, isDone: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setText("");
  };

  const deleteBtnClickHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>KIM's Todo List</h1>
      <div>
        제목
        <input value={title} onChange={(event) => titleSaveHandler(event)} />
        내용
        <input value={text} onChange={(event) => textSaveHandler(event)} />
        <button className="addBtn" onClick={addButtonClickHandler}>
          추가하기
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            <br />
            {todo.text}
            <button onClick={() => deleteBtnClickHandler(todo.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
