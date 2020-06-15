import React from "react";
import List from "./List";
import { addToDo, updateToDo, deleteToDo, loadToDo } from "../actions";
import { connect } from "react-redux";
import { matchesSearchKeywords, matchesSearchTags } from "../utils";

const getVisibleTasks = (tasks, isCompleted, searchKeywords, searchTags) => {
  const visibleTasks = tasks
    .filter((task) => task.isCompleted === isCompleted)
    .filter((task) => matchesSearchKeywords(task, searchKeywords))
    .filter((task) => matchesSearchTags(task, searchTags));

  return visibleTasks;
};

const mapStateToProps = (state, { isDailies }) => {
  const taskList = isDailies ? state.dailyTasks : state.oneOffTasks;
  const listInformation = isDailies ? state.lists[0] : state.lists[1];
  return {
    tasks: getVisibleTasks(
      taskList,
      state.viewCompleted,
      state.searchKeywords,
      state.searchTags
    ),
    ...listInformation,
  };
};

const mapDispatchToProps = (dispatch, { isDailies }) => {
  return {
    addTask: (todo) => dispatch(addToDo(todo, isDailies)),
    updateTask: (todo) => dispatch(updateToDo(todo, isDailies)),
    deleteTask: (todo) => dispatch(deleteToDo(todo, isDailies)),
    loadTasks: (listId) => dispatch(loadToDo(listId, isDailies)),
  };
};

const ConnectedDailyList = (props) => {
  return <List isDailies={props.isDailies} title={props.title} {...props} />;
};

const ConnectedList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDailyList);
export default ConnectedList;
