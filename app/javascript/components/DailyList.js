import React from "react";
import List from "./List";
import { addToDo, updateToDo, deleteToDo, loadToDo } from "../actions";
import { connect } from "react-redux";

const isDailies = true;

const matchesSearchKeywords = (task, searchKeywords) => {
  const taskTitle = task.title.toLowerCase();
  const taskDescription = task.description.toLowerCase();
  return (
    taskTitle.includes(searchKeywords) ||
    taskDescription.includes(searchKeywords)
  );
};
const getVisibleTasks = (tasks, isCompleted, searchKeywords) => {
  const visibleTasks = tasks
    .filter((task) => task.isCompleted === isCompleted)
    .filter((task) => matchesSearchKeywords(task, searchKeywords));

  return visibleTasks;
};
const mapStateToProps = (state) => {
  const [dailyList] = state.lists.filter(
    (list) => list.title === "Daily Tasks"
  );
  return {
    tasks: getVisibleTasks(
      state.dailyTasks,
      state.viewCompleted,
      state.searchKeywords
    ),
    ...dailyList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (todo) => dispatch(addToDo(todo, isDailies)),
  updateTask: (todo) => dispatch(updateToDo(todo, isDailies)),
  deleteTask: (todo) => dispatch(deleteToDo(todo, isDailies)),
  loadTasks: (listId) => dispatch(loadToDo(listId, isDailies)),
});
const ConnectedDailyList = (props) => {
  return <List isDailies={true} title="Daily Tasks" {...props} />;
};

const DailyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDailyList);
export default DailyList;
