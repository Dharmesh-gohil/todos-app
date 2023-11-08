/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is for edit todo so first we check is anything in editid if yes then we find it
    if (editId) {
      const editTodo = todos.find((item) => item.id == editId);

      // first we find that obj usin editTodo and then we search in whole todos that object
      //  then we try update it
      const updatedTodo = todos.map((item) =>
        item.id === editTodo.id
          ? (item = { id: item.id, todo })
          : { id: item.id, todo: item.todo }
      );
      setTodos(updatedTodo);
      setEditId(0);
      setTodo("");
      // if wedont write return then we go below statement of code and this edited become new one and old also there so we write
      return;
    }

    // this is for setting up data in todos list from todo using
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleEdit = (id) => {
    console.log("this is id what we click", id);
    const editTodo = todos.find((item) => item.id == id);
    //below line code will set data into the input box for editing as todo for editing
    setTodo([editTodo.todo]);
    setEditId(id);
  };

  const handleDelete = (id) => {
    console.log(id);
    const deleteTodos = todos.filter((item) => item.id !== id);
    setTodos([...deleteTodos]);
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        Todo list app!
        <br />
        you have pending {todos.length} todos
        <form onSubmit={handleSubmit} className="todoForm">
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button type="submit">{editId ? "Editing" : "Go"}</button>
        </form>
        <ul className="allTodos">
          {todos.map((item) => {
            // console.log(item);
            const { id, todo } = item;
            return (
              <li className="singleTodo" key={id}>
                <span className="todoText">{todo}</span>
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
      </div>
    </div>
  );
};
export default App;
