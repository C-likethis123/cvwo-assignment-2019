import { ADD_TODO, UPDATE_TODO, DELETE_TODO, LOAD_TODO } from "../action-types";

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
    case UPDATE_TODO: {
      const task = action.todo;
      if (action.isDailies) {
        const prevTasks = [...state.dailyTasks];
        const indexOfTask = prevTasks.findIndex(
          (currTask) => currTask.id === task.id
        );
        prevTasks[indexOfTask] = Object.assign({}, task);
        console.log(prevTasks);
        return { ...state, dailyTasks: prevTasks };
      }
      const prevTasks = [...state.oneOffTasks];
      const indexOfTask = prevTasks.findIndex(
        (currTask) => currTask.id === task.id
      );
      prevTasks[indexOfTask] = Object.assign({}, task);
      return { ...state, oneOffTasks: prevTasks };
    }
    case DELETE_TODO: {
      const task = action.todo;
      if (action.isDailies) {
        return {
          ...state,
          dailyTasks: state.dailyTasks.filter(
            (currTask) => currTask.id !== task.id
          ),
        };
      }
      return {
        ...state,
        oneOffTasks: state.oneOffTasks.filter(
          (currTask) => currTask.id !== task.id
        ),
      };
    }
    case LOAD_TODO: {
      return action.isDailies
        ? { ...state, dailyTasks: action.data }
        : { ...state, oneOffTasks: action.data };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
