export type Status = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export type ToDo = {
  item: string;
  status: Status;
  added: Date;
};

export type AddType = {
  type: "add";
  payload: ToDo;
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
        todos: [...state.todos, { ...action.payload }],
      };
    case "delete": {
      const filtered = state.todos;
      filtered.splice(action.payload, 1);
      return {
        todos: [...filtered],
      };
    }

    case "move": {
      const filtered = state.todos;
      const todoU = filtered[action.payload];

      filtered.splice(action.payload, 1);
      switch (todoU.status) {
        case "NOT_STARTED":
          todoU.status = "IN_PROGRESS";
          break;
        case "IN_PROGRESS":
          todoU.status = "COMPLETED";
      }
      return { todos: [...filtered, todoU] };
    }
  }
};

export default todoReducer;
