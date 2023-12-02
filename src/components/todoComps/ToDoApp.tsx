import { useReducer, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import todoReducer, { ToDo } from "../reducer/todoReducer";

type initialState = { nextId: number; todos: ToDo[] };

const getInitialState = () => {
  const storedTodo = localStorage.getItem("todoItems");
  console.log(localStorage.getItem("todoItems"));
  return storedTodo
    ? (JSON.parse(storedTodo) as initialState)
    : { nextId: 1, todos: [] };
};

const ToDoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(state));
  }, [state]);
  return (
    <>
      <ToDoForm state={state} dispatch={dispatch} />
      <div className="lg:w-11/12 w-full min-h-[50%] lg:min-h-[80%] m-auto lg:p-6 p-4 dark:dark:bg-gray-900 dark:dark:text-gray-100 lg:grid lg:grid-cols-3 block lg:gap-10 text-center">
        <div className="rounded bg-gray-600 p-4 lg:mb-0 mb-4 xl:max-h-[70%] xl:overflow-y-auto">
          <div className="text-lg font-medium border-b border-black p-4 lg:w-8/12 w:11/12 m-auto hover:text-gray-300 mb-5">
            Not Started
          </div>
          <div>
            <ToDoList
              todos={state.todos}
              dispatch={dispatch}
              condition="Not Started"
            />
          </div>
        </div>
        <div className="rounded bg-gray-600 p-4 lg:mb-0 mb-4">
          <div className="text-lg font-medium border-b border-black p-4 w-8/12 m-auto hover:text-gray-300 mb-5">
            In Progress
          </div>
          <ToDoList
            todos={state.todos}
            dispatch={dispatch}
            condition="In Progress"
          />
        </div>
        <div className="rounded bg-gray-600 p-4 lg:mb-0 mb-4">
          <div className="text-lg font-medium border-b border-black p-4 w-8/12 m-auto hover:text-gray-300 mb-5">
            Completed
          </div>
          <ToDoList
            todos={state.todos}
            dispatch={dispatch}
            condition="Completed"
          />
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
