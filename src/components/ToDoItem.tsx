import { ActionType, ToDo } from "./reducer/todoReducer";

const ToDoItem = ({
  todo,
  dispatch,
}: {
  todo: ToDo;
  dispatch: React.Dispatch<ActionType>;
}) => {
  const handleMove = () => {
    const todoU = todo;
    switch (todo.status) {
      case "Not Started":
        todoU.status = "In Progress";
        break;
      case "In Progress":
        todoU.status = "Completed";
    }
    dispatch({ type: "move", payload: todoU });
  };

  return (
    <div className="m-1 relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:dark:bg-gray-900 dark:dark:text-gray-100 dark:dark:divide-gray-700 hover:bg-gray-800">
      <div className="p-3 space-y-1 w-10/12">
        <p className="text-md dark:dark:text-gray-400">{todo.item}</p>
      </div>
      <div className="flex items-center gap-3 p-3">
        <span className="text-xs text-white">#{todo.id}</span>
        <div className="space-y-1 text-center">
          <span className="text-xs">
            {todo.added.toLocaleDateString() +
              " " +
              todo.added.toLocaleTimeString()}
          </span>
          <p className="inline-block px-2 py-1 text-xs font-semibold rounded-md dark:dark:bg-green-400 dark:dark:text-gray-900">
            {todo.status}
          </p>
          {todo.status !== "Completed" && (
            <button
              onClick={() => handleMove()}
              className="block ml-8 px-2 py-1 text-xs font-semibold rounded-md dark:dark:bg-blue-400 dark:dark:text-gray-900 hover:bg-blue-600"
            >
              {"Move ->"}
            </button>
          )}
          <button
            onClick={() => dispatch({ type: "delete", payload: todo })}
            className="block ml-7 px-2 py-1 text-xs font-semibold rounded-md dark:dark:bg-red-400 dark:dark:text-gray-900 hover:bg-red-600"
          >
            {"x Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
