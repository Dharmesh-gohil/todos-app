/* eslint-disable react/prop-types */
const List = ({ handleEdit, handleDelete, todos }) => {
  return (
    <ul className="all-todos">
      {todos.map((item) => {
        const { id, todo } = item;
        return (
          <li className="single-todo" key={id}>
            <span className="todo-text">{todo}</span>
            <button
              onClick={() => {
                handleEdit(id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
