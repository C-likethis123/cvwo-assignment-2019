import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  LOAD_TODO,
  VISIBILITY_FILTER,
  KEYWORDS_FILTER,
  UPDATE_TAGS,
  TAGS_FILTER,
  LOAD_LISTS,
} from "../action-types";
export function addToDo(todo, isDailies) {
  return [{ type: ADD_TODO, todo, isDailies }, updateFilterTags];
}

export function updateToDo(todo, isDailies) {
  return [{ type: UPDATE_TODO, todo, isDailies }, updateFilterTags];
}

export function deleteToDo(todo, isDailies) {
  return [{ type: DELETE_TODO, todo, isDailies }, updateFilterTags];
}

export function loadToDo(listId, isDailies) {
  return function (dispatch) {
    fetch(`/api/v1/lists/${listId}/tasks.json`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: LOAD_TODO, data, isDailies }))
      .then(() => dispatch(updateFilterTags));
  };
}

export function loadLists() {
  return function (dispatch) {
    fetch(`/api/v1/lists.json`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: LOAD_LISTS, lists: data }));
  };
}

export const viewCompleted = { type: VISIBILITY_FILTER };

export function updateSearchKeywords(keywords) {
  return { type: KEYWORDS_FILTER, keywords };
}

export function updateSearchTags(tags) {
  return { type: TAGS_FILTER, tags };
}

export const updateFilterTags = { type: UPDATE_TAGS };
