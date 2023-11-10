import { useState } from "react";
import List from "./component/List";
import Form from "./component/form";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);

    if (editId) {
      const editTodo = todos.find((item) => item.id == editId);

      const updateTodo = todos.map((item) =>
        item.id == editTodo.id
          ? (item = { id: item.id, todo })
          : { id: item.id, todo: item.todo }
      );
      console.log("updated todo value is:", updateTodo);
      setTodos(updateTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      const id = `${todo}-${Date.now()}`;
      setTodos([{ id, todo }, ...todos]);
      setTodo("");
    } else {
      alert("please enter value in input box");
    }
  };

  const handleEdit = (id) => {
    console.log(id);
    const editTodo = todos.find((item) => item.id == id);
    console.log(editTodo);
    //Here we seting todo value so we can see in the input box
    setTodo([editTodo.todo]);
    setEditId(id);
  };
  const handleDelete = (id) => {
    console.log(id);
    const deleteTodo = todos.filter((item) => item.id !== id);
    setTodos([...deleteTodo]);
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1>Todo list app</h1>
        <Form
          todo={todo}
          setTodo={setTodo}
          editId={editId}
          handleSubmit={handleSubmit}
        />
        <List
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};
export default App;
