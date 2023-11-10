/* eslint-disable react/prop-types */
const Form = ({ todo, editId, handleSubmit, setTodo }) => {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button>{editId ? "Editing" : "Go"}</button>
    </form>
  );
};
export default Form;
