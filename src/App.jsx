import React, { useState } from "react";
import InputForm from "./components/InputForm";
import TodoSection from "./components/TodoSection";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

  // 제목 입력 변경 핸들러
  const titleSaveHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 입력 변경 핸들러
  const contentSaveHandler = (event) => {
    setContent(event.target.value);
  };

  // 추가 버튼 클릭 핸들러
  const addButtonClickHandler = () => {
    const newTodo = { id: todos.length + 1, title, content, isDone: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setContent("");
  };

  // 할 일 삭제 버튼 클릭 핸들러
  const deleteBtnClickHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 완료/취소 버튼 토글 핸들러
  const toggleDoneCancelHandler = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 완료되지 않은 할 일 목록
  const workingTodos = todos.filter((todo) => !todo.isDone);
  // 완료된 할 일 목록
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="todo">
      <h1>MIN's Todo List</h1>
      {/* 입력 폼 컴포넌트 */}
      <InputForm
        title={title}
        content={content}
        onTitleChange={titleSaveHandler}
        onContentChange={contentSaveHandler}
        onAddButtonClick={addButtonClickHandler}
      />
      {/* 작업 중인 할 일 목록 */}
      <TodoSection
        title="Working"
        todos={workingTodos}
        deleteBtnClickHandler={deleteBtnClickHandler}
        toggleDoneCancelHandler={toggleDoneCancelHandler}
      />
      {/* 완료된 할 일 목록 */}
      <TodoSection
        title="Done"
        todos={doneTodos}
        deleteBtnClickHandler={deleteBtnClickHandler}
        toggleDoneCancelHandler={toggleDoneCancelHandler}
      />
    </div>
  );
};

export default App;
