import { ToDo } from "../reducer/todoReducer";
import ToDoBase from "./ToDoBase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api";
import { Spinner } from "flowbite-react";
import { mutationsType } from "../reducer/UserContest";

const ToDoAppAuth = () => {
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  const queryClient = useQueryClient();
  const onSucessfulMutation = () =>
    queryClient.invalidateQueries({ queryKey: ["todos"] });

  const mutations: mutationsType = {
    addMutation: useMutation({
      mutationFn: createTodo,
      onSuccess: onSucessfulMutation,
    }),
    updateMutation: useMutation({
      mutationFn: updateTodo,
      onSuccess: onSucessfulMutation,
    }),
    deleteMutation: useMutation({
      mutationFn: deleteTodo,
      onSuccess: onSucessfulMutation,
    }),
  };

  if (query.isPending)
    return (
      <div className="text-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );

  const todos: ToDo[] = query.data ?? [];

  return <ToDoBase todos={todos} dispatch={null} mutations={mutations} />;
};

export default ToDoAppAuth;
