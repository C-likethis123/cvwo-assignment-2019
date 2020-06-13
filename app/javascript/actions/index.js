import { ADD_TODO } from "../action-types";
export function addToDo(todo) {
  return { type: ADD_TODO, todo };
}
