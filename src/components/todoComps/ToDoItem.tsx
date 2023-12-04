import { Spinner } from "flowbite-react";
import { mutationsType } from "../reducer/UserContest";
import { ActionType, Status, ToDo } from "../reducer/todoReducer";

const ToDoItem = ({
  id,
  todo,
  dispatch,
  mutations,
}: {
  id: number;
  todo: ToDo;
  dispatch: React.Dispatch<ActionType> | null;
  mutations: mutationsType | null;
}) => {
  const handleMove = () => {
    if (dispatch) dispatch({ type: "move", payload: id - 1 });
    if (mutations) {
      let newStatus: Status = todo.status;
      switch (todo.status) {
        case "NOT_STARTED":
          newStatus = "IN_PROGRESS";
          break;
        case "IN_PROGRESS":
          newStatus = "COMPLETED";
      }
      mutations.updateMutation.mutate({
        id: todo.id,
        updatedTodo: { item: todo.item, status: newStatus, added: todo.added },
      });
    }
  };

  const handleDelete = () => {
    if (dispatch) dispatch({ type: "delete", payload: id - 1 });
    if (mutations) mutations.deleteMutation.mutate(todo.id);
  };

  return (
    <div className="m-auto mb-1 relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x bg-gray-900 text-gray-100 divide-gray-700 hover:bg-gray-800">
      <div className="p-3 space-y-1 w-full lg:w-8/12">
        <p className="text-md text-gray-400">{todo.item}</p>
      </div>
      <div className="flex items-center gap-3 p-3 w-full text-center lg:w-4/12">
        <span className="text-xs text-white">#{id}</span>
        <div className="space-y-1 w-full">
          <span className="text-xs block">
            {new Date(todo.added).toLocaleDateString() +
              " " +
              new Date(todo.added).toLocaleTimeString()}
          </span>
          <p className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-green-400 text-gray-900">
            {todo.status}
          </p>
          {mutations?.updateMutation.isPending ? (
            <Spinner aria-label="Extra large spinner example" size="sm" />
          ) : (
            todo.status !== "COMPLETED" && (
              <button
                onClick={handleMove}
                className="m-1 px-2 py-1 text-xs font-semibold rounded-md bg-blue-400 text-gray-900 hover:bg-blue-600"
              >
                {"Move"}
              </button>
            )
          )}
          {mutations?.deleteMutation.isPending ? (
            <Spinner aria-label="Extra large spinner example" size="sm" />
          ) : (
            <button
              onClick={handleDelete}
              className="m-1 px-2 py-1 text-xs font-semibold rounded-md bg-red-400 text-gray-900 hover:bg-red-600"
            >
              {"Remove"}
            </button>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default ToDoItem;
