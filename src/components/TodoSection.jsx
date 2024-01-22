import TodoCard from "./TodoCard";

// Todo 섹션 컴포넌트

const TodoSection = ({ title, todos, deleteBtnClickHandler, toggleDoneCancelHandler }) => {
  return (
    <div className={`${title.toLowerCase()}Section`}>
     <h2>{title === "Working" ? `✍ ${title}..` : `✅ ${title}!`}</h2>
      <div className="card-container">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteBtnClickHandler={deleteBtnClickHandler}
            toggleDoneCancelHandler={toggleDoneCancelHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoSection;
