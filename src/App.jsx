// App.js
import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

  const titleSaveHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentSaveHandler = (event) => {
    setContent(event.target.value);
  };

  const addButtonClickHandler = () => {
    const newTodo = { id: todos.length + 1, title, content, isDone: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setContent("");
  };

  const deleteBtnClickHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleDoneCancelHandler = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const todoCards = (todos, deleteBtnClickHandler, toggleDoneCancelHandler) => {
    return todos.map((todo) => (
      <TodoCard
        key={todo.id}
        todo={todo}
        deleteBtnClickHandler={deleteBtnClickHandler}
        toggleDoneCancelHandler={toggleDoneCancelHandler}
      />
    ));
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="todo">
      <h1>KIM's Todo List</h1>
      <div className="addSection">
        <div className="inputSection">
          Title
          <input value={title} onChange={(event) => titleSaveHandler(event)} />
          Content
          <input
            value={content}
            onChange={(event) => contentSaveHandler(event)}
          />
        </div>
        <button className="addBtn" onClick={addButtonClickHandler}>
          Add
        </button>
      </div>
      <div className="workingSection">
        <h2>Working...</h2>
        <div className="card-container">
          {todoCards(workingTodos, deleteBtnClickHandler, toggleDoneCancelHandler)}
        </div>
      </div>
      <div className="doneSection">
        <h2>Done !</h2>
        <div className="card-container">
          {todoCards(doneTodos, deleteBtnClickHandler, toggleDoneCancelHandler)}
        </div>
      </div>
    </div>
  );
};

export default App;
