// Demo API - using local data instead of backend
import {
  login as demoLogin,
  register as demoRegister,
  getProfile as demoGetProfile,
  getTodos as demoGetTodos,
  createTodo as demoCreateTodo,
  updateTodo as demoUpdateTodo,
  deleteTodo as demoDeleteTodo
} from './demoData';

// Auth API
export const login = demoLogin;
export const register = demoRegister;
export const getProfile = demoGetProfile;

// Todo API
export const getTodos = demoGetTodos;
export const createTodo = demoCreateTodo;
export const updateTodo = demoUpdateTodo;
export const deleteTodo = demoDeleteTodo;
