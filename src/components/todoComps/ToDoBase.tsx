import { useMemo } from "react";
import { mutationsType } from "../reducer/UserContest";
import { ActionType, AddType, ToDo } from "../reducer/todoReducer";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoBase = ({
  todos,
  dispatch,
  mutations,
}: {
  todos: ToDo[];
  dispatch: React.Dispatch<AddType | ActionType> | null;
  mutations: mutationsType | null;
}) => {
  const addSno = () => todos.forEach((todo, idx) => (todo.sno = idx + 1));
  useMemo(addSno, [todos]);

  return (
    <>
      <ToDoForm dispatch={dispatch} mutations={mutations} />
      <div className="lg:w-11/12 w-full min-h-[50%] lg:min-h-[80%] m-auto lg:p-6 p-4 bg-gray-900 text-gray-100 lg:grid lg:grid-cols-3 block lg:gap-10 text-center">
        <div className="rounded bg-gray-600 p-4 lg:mb-0 mb-4 xl:overflow-y-auto">
          <div className="text-lg font-medium border-b border-black p-4 lg:w-8/12 w:11/12 m-auto hover:text-gray-300 mb-5">
            Not Started
          </div>
          <div>
            <ToDoList
              todos={todos}
              dispatch={dispatch}
              mutations={mutations}
              condition="NOT_STARTED"
            />
          </div>
        </div>
        <div className="rounded bg-gray-600 p-4 lg:mb-0 mb-4">
          <div className="text-lg font-medium border-b border-black p-4 w-8/12 m-auto hover:text-gray-300 mb-5">
            In Progress
          </div>
          <ToDoList
            todos={todos}
            dispatch={dispatch}
            mutations={mutations}
            condition="IN_PROGRESS"
          />
        </div>
        <div className="rounded bg-gray-600 p-4 lg:mb-0 mb-4">
          <div className="text-lg font-medium border-b border-black p-4 w-8/12 m-auto hover:text-gray-300 mb-5">
            Completed
          </div>
          <ToDoList
            todos={todos}
            dispatch={dispatch}
            mutations={mutations}
            condition="COMPLETED"
          />
        </div>
      </div>
    </>
  );
};

export default ToDoBase;
