// Todo 카드 컴포넌트

const TodoCard = ({ todo, deleteBtnClickHandler, toggleDoneCancelHandler }) => {
  return (
    <div className={`card${todo.isDone ? "done" : "working"}`}>
      <h3 className="todoTitle">{todo.title}</h3>
      <p className="todoContent">{todo.content}</p>
      <button className="deleteBtn" onClick={() => deleteBtnClickHandler(todo.id)}>
        Delete
      </button>
      <button className="toggleBtn" onClick={() => toggleDoneCancelHandler(todo.id)}>
        {todo.isDone ? "Cancel" : "Done"}
      </button>
    </div>
  );
};

export default TodoCard;
