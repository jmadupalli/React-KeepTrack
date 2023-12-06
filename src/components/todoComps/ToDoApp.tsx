import { useReducer, useEffect } from "react";
import todoReducer, { ToDo } from "../reducer/todoReducer";
import ToDoBase from "./ToDoBase";

type initialState = { todos: ToDo[] };

const getInitialState = () => {
  const storedTodo = localStorage.getItem("todoItems");
  return storedTodo ? (JSON.parse(storedTodo) as initialState) : { todos: [] };
};

const ToDoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, getInitialState());

  const todos = state.todos ?? [];

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(state));
  }, [state]);
  return <ToDoBase todos={todos} dispatch={dispatch} mutations={null} />;
};

export default ToDoApp;
