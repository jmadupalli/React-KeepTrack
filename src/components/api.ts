import axios from "axios";
import { userContextType } from "./reducer/UserContest";
import { Status, ToDo } from "./reducer/todoReducer";

const API_URL = "http://localhost:8080/api";

export type newTodo = {
  item: string;
  status: Status;
  added: Date;
};

const getUserState = () => {
  const storedUser = localStorage.getItem("userInfo");
  return storedUser
    ? (JSON.parse(storedUser) as userContextType)
    : { username: "", password: "" };
};

const userInfo = getUserState();

export const loginUser = (LoginDTO: { username: string; password: string }) => {
  return axios.post(API_URL + "/auth/login", LoginDTO);
};

export const registerUser = (RegisterDTO: {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}) => {
  return axios.post(API_URL + "/auth/register", RegisterDTO);
};

export const getTodos = async () => {
  const response = await axios.get<ToDo[]>(API_URL + "/todos", {
    auth: { username: userInfo.username, password: userInfo.password },
  });
  return response.data;
};

export const createTodo = async (newTodo: newTodo) => {
  const response = await axios.post<void>(API_URL + "/todos", newTodo, {
    auth: { username: userInfo.username, password: userInfo.password },
  });
  return response.data;
};

export const updateTodo = async ({
  id,
  updatedTodo,
}: {
  id: number;
  updatedTodo: newTodo;
}) => {
  const response = await axios.put<void>(
    API_URL + "/todos/" + id,
    updatedTodo,
    {
      auth: { username: userInfo.username, password: userInfo.password },
    }
  );
  return response.data;
};

export const deleteTodo = async (deleteId: number) => {
  const response = await axios.delete<void>(API_URL + "/todos/" + deleteId, {
    auth: { username: userInfo.username, password: userInfo.password },
  });
  return response.data;
};
