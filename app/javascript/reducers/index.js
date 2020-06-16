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
import { processTags } from "../utils";
const initialState = {
  viewCompleted: false,
  searchKeywords: "",
  searchTags: [],
  tagOptions: [],
  lists: [],
  dailyTasks: [],
  oneOffTasks: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return action.isDailies
        ? { ...state, dailyTasks: state.dailyTasks.concat(action.todo) }
        : { ...state, oneOffTasks: state.oneOffTasks.concat(action.todo) };
    }
    case UPDATE_TODO: {
      const task = action.todo;
      if (action.isDailies) {
        const prevTasks = [...state.dailyTasks];
        const indexOfTask = prevTasks.findIndex(
          (currTask) => currTask.id === task.id
        );
        prevTasks[indexOfTask] = Object.assign({}, task);
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
      return action.isDailies
        ? {
            ...state,
            dailyTasks: state.dailyTasks.filter(
              (currTask) => currTask.id !== task.id
            ),
          }
        : {
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
    case VISIBILITY_FILTER: {
      return { ...state, viewCompleted: !state.viewCompleted };
    }
    case KEYWORDS_FILTER: {
      return { ...state, searchKeywords: action.keywords };
    }
    case TAGS_FILTER: {
      return { ...state, searchTags: action.tags };
    }
    case UPDATE_TAGS: {
      let tagOptions = [];
      state.dailyTasks.forEach((task) => {
        let tagsFromTasks = processTags(task.tags);
        tagOptions = tagOptions.concat(tagsFromTasks);
      });
      state.oneOffTasks.forEach((task) => {
        let tagsFromTasks = processTags(task.tags);
        tagOptions = tagOptions.concat(tagsFromTasks);
      });
      return {
        ...state,
        tagOptions: [...new Set([...tagOptions])].sort(),
      };
    }
    case LOAD_LISTS: {
      return { ...state, lists: action.lists };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
