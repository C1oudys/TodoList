// InputForm 컴포넌트

const InputForm = ({ title, content, onTitleChange, onContentChange, onAddButtonClick }) => {
  return (
    <div className="addSection">
      <div className="inputSection">
        Title
        <input value={title} onChange={onTitleChange} />
        Content
        <input value={content} onChange={onContentChange} />
      </div>
      <button className="addBtn" onClick={onAddButtonClick}>
        Add
      </button>
    </div>
  );
};

export default InputForm;
