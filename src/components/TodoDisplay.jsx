import { useContext } from "react";
import TodoContext from "../store/TodoContext";

export default function TodoDisplay() {
  const { todos, dispatch } = useContext(TodoContext);

  function handleDelete(id) {
    console.log("delete", id);
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }
  return (
    <div className="todo-display">
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <p>{todo.task}</p>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
