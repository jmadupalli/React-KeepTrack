import { useReducer } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import todoReducer, { ToDo } from "./components/reducer/todoReducer";

const initialState: { nextId: number; todos: ToDo[] } = {
  nextId: 1,
  todos: [],
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="bg-gray-700 p-12 grow">
          <ToDoForm state={state} dispatch={dispatch} />
          <div className="w-11/12 min-h-[80%] m-auto p-6 dark:dark:bg-gray-900 dark:dark:text-gray-100 grid grid-cols-3 gap-10 text-center">
            <div className="rounded bg-gray-600 p-4">
              <div className="text-lg font-medium border-b border-black p-4 w-8/12 m-auto hover:text-gray-300 mb-5">
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
            <div className="rounded bg-gray-600 p-4">
              <div className="text-lg font-medium border-b border-black p-4 w-8/12 m-auto hover:text-gray-300 mb-5">
                In Progress
              </div>
              <ToDoList
                todos={state.todos}
                dispatch={dispatch}
                condition="In Progress"
              />
            </div>
            <div className="rounded bg-gray-600 p-4">
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
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
