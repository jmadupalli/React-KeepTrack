import { UseMutationResult } from "@tanstack/react-query";
import { createContext } from "react";
import { newTodo } from "../api";

export type userContextType = {
  firstName: string;
  username: string;
  password: string;
};

export type mutationsType = {
  addMutation: UseMutationResult<void, Error, newTodo, unknown>;
  updateMutation: UseMutationResult<
    void,
    Error,
    { id: number; updatedTodo: newTodo },
    unknown
  >;
  deleteMutation: UseMutationResult<void, Error, number, unknown>;
};

export const AuthContext = createContext<userContextType | null>(null);
