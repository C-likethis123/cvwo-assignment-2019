import { ADD_TODO, UPDATE_TODO, DELETE_TODO, LOAD_TODO } from "../action-types";
export function addToDo(todo, isDailies) {
  return { type: ADD_TODO, todo, isDailies };
}

export function updateToDo(todo, isDailies) {
  return { type: UPDATE_TODO, todo, isDailies };
}

export function deleteToDo(todo, isDailies) {
  return { type: DELETE_TODO, todo, isDailies };
}

export function loadToDo(listId, isDailies) {
  return function (dispatch) {
    fetch(`/api/v1/lists/${listId}/tasks.json`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: LOAD_TODO, data, isDailies }));
  };
}
