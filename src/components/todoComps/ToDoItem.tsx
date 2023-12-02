import { ActionType, ToDo } from "../reducer/todoReducer";

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
    <div className="m-auto mb-1 relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:dark:bg-gray-900 dark:dark:text-gray-100 dark:dark:divide-gray-700 hover:bg-gray-800">
      <div className="p-3 space-y-1 w-full lg:w-8/12">
        <p className="text-md dark:dark:text-gray-400">{todo.item}</p>
      </div>
      <div className="flex items-center gap-3 p-3 w-full text-center lg:w-4/12">
        <span className="text-xs text-white">#{todo.id}</span>
        <div className="space-y-1 w-full">
          <span className="text-xs block">
            {new Date(todo.added).toLocaleDateString() +
              " " +
              new Date(todo.added).toLocaleTimeString()}
          </span>
          <p className="inline-block px-2 py-1 text-xs font-semibold rounded-md dark:dark:bg-green-400 dark:dark:text-gray-900">
            {todo.status}
          </p>
          {todo.status !== "Completed" && (
            <button
              onClick={() => handleMove()}
              className="m-1 px-2 py-1 text-xs font-semibold rounded-md dark:dark:bg-blue-400 dark:dark:text-gray-900 hover:bg-blue-600"
            >
              {"Move"}
            </button>
          )}
          <button
            onClick={() => dispatch({ type: "delete", payload: todo })}
            className="m-1 px-2 py-1 text-xs font-semibold rounded-md dark:dark:bg-red-400 dark:dark:text-gray-900 hover:bg-red-600"
          >
            {"Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
