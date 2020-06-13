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
      if (action.isDailies) {
        return { ...state, dailyTasks: state.dailyTasks.concat(action.todo) };
      }
      return { ...state, oneOffTasks: state.oneOffTasks.concat(action.todo) };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
