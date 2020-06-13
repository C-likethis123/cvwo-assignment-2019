import { ADD_TODO } from "../action-types";

const initialState = {
  viewCompleted: false,
  searchKeywords: "",
  searchTags: [],
  tagOptions: [],
  lists: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, lists: state.lists.concat(action.todo) };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
