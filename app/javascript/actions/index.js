import { ADD_TODO } from "../action-types";
export function addToDo(todo, isDailies) {
  return { type: ADD_TODO, todo, isDailies };
}
