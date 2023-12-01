import ToDoItem from "./ToDoItem";
import { ActionType, Status, ToDo } from "./reducer/todoReducer";

const ToDoList = ({
  todos,
  dispatch,
  condition,
}: {
  todos: ToDo[];
  dispatch: React.Dispatch<ActionType>;
  condition: Status;
}) => {
  const filteredTodos = todos.filter((todo) => todo.status == condition);
  return filteredTodos.map((todo) => (
    <ToDoItem todo={todo} dispatch={dispatch} />
  ));
};

export default ToDoList;
