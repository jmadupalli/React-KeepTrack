export type Status = "Not Started" | "In Progress" | "Completed";

export type ToDo = {
  id: number;
  item: string;
  status: Status;
  added: Date;
};

export type ActionType = {
  type: "add" | "delete" | "move";
  payload: ToDo;
};

const todoReducer = (
  state: { nextId: number; todos: ToDo[] },
  action: ActionType
) => {
  switch (action.type) {
    case "add":
      return {
        nextId: state.nextId + 1,
        todos: [...state.todos, { ...action.payload }],
      };
    case "delete": {
      const filtered = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        nextId: state.nextId,
        todos: [...filtered],
      };
    }

    case "move": {
      const filtered = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        nextId: state.nextId,
        todos: [...filtered, action.payload],
      };
    }
  }
};

export default todoReducer;
