import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../action-types";
export function addToDo(todo, isDailies) {
  return { type: ADD_TODO, todo, isDailies };
}

export function updateToDo(todo, isDailies) {
  return { type: UPDATE_TODO, todo, isDailies };
}

export function deleteToDo(todo, isDailies) {
  return { type: DELETE_TODO, todo, isDailies };
}
