import ToDoItem from "./ToDoItem";
import { ActionType, Status, ToDo } from "../reducer/todoReducer";
import { mutationsType } from "../reducer/UserContest";

const ToDoList = ({
  todos,
  dispatch,
  mutations,
  condition,
}: {
  todos: ToDo[];
  dispatch: React.Dispatch<ActionType> | null;
  mutations: mutationsType | null;
  condition: Status;
}) => {
  const filteredTodos = todos.filter((todo) => todo.status == condition);
  return filteredTodos.map((todo, index) => (
    <ToDoItem
      key={index}
      id={todo.id}
      todo={todo}
      dispatch={dispatch}
      mutations={mutations}
    />
  ));
};

export default ToDoList;
