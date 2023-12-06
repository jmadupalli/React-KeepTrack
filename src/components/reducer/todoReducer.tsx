import { newTodo } from "../api";

export type Status = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export type ToDo = {
  id: number;
  sno?: number;
  item: string;
  status: Status;
  added: Date;
};

export type AddType = {
  type: "add";
  payload: newTodo;
};

export type ActionType = {
  type: "delete" | "move";
  payload: number;
};

const todoReducer = (
  state: { todos: ToDo[] },
  action: AddType | ActionType
) => {
  switch (action.type) {
    case "add":
      return {
        todos: [...state.todos, { id: state.todos.length, ...action.payload }],
      };
    case "delete": {
      const filtered = state.todos;
      filtered.splice(action.payload, 1);
      filtered.forEach((todo, id) => (todo.id = id));
      return {
        todos: [...filtered],
      };
    }

    case "move": {
      const filtered = state.todos;
      const todoU = filtered[action.payload];
      switch (todoU.status) {
        case "NOT_STARTED":
          todoU.status = "IN_PROGRESS";
          break;
        case "IN_PROGRESS":
          todoU.status = "COMPLETED";
      }
      filtered[action.payload] = todoU;
      return { todos: [...filtered] };
    }
  }
};

export default todoReducer;
