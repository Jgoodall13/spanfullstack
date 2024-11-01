import { useState, useRef, useContext } from "react";
import TodoContext from "../store/TodoContext";

export default function Input() {
  const { todo, dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  function onClick() {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.floor(Math.random() * 1000),
        task: inputRef.current.value,
      },
    });
    inputRef.current.value = "";
  }
  return (
    <div className="inputbox">
      <label htmlFor="">Add Task</label>
      <input
        className="border border-green-400"
        ref={inputRef}
        type="text"
        id="task"
        placeholder="Add a task"
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
}
