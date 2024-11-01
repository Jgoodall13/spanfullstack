import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import "./App.css";
import TodoProvider from "./store/TodoProvider";
import TodoDisplay from "./components/TodoDisplay";

const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Hello!</h1>
        <Input />
        <TodoDisplay />
      </div>
    </TodoProvider>
  );
};

export default App;
