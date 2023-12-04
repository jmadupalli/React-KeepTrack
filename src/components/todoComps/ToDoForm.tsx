import { useState } from "react";
import { ActionType, AddType, Status, ToDo } from "../reducer/todoReducer";

const ToDoForm = ({
  dispatch,
}: {
  state: { todos: ToDo[] };
  dispatch: React.Dispatch<AddType | ActionType>;
}) => {
  const [item, setItem] = useState("");
  const [status, setStatus] = useState<Status>("NOT_STARTED");

  const handleSubmit = () => {
    if (!item) {
      return;
    }

    dispatch({
      type: "add",
      payload: { item, status, added: new Date() },
    });
  };

  return (
    <div className="bg-gray-900 rounded-md lg:w-11/12 w-full p-6 m-auto mb-3 text-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className="form-input py-3 lg:w-6/12 w-10/12"
          type="text"
          placeholder="Enter To Do Item"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          required
        />
        <select
          className="form-select py-3 m-1 lg:ml-3 lg:w-3/12 w-10/12"
          required
          value={status}
          onChange={(e) => {
            setStatus(e.target.value as Status);
          }}
        >
          <option disabled>Select Status</option>
          <option value="NOT_STARTED">Not Started</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
        <button
          className="block bg-red-400 rounded px-8 py-3 m-auto xl:inline xl:ml-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ToDoForm;
