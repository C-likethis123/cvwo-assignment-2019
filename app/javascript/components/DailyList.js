import React from "react";
import List from "./List";
import { addToDo, updateToDo, deleteToDo, loadToDo } from "../actions";
import { connect } from "react-redux";

const isDailies = true;
const mapStateToProps = (state) => {
  const [dailyList] = state.lists.filter(
    (list) => list.title === "Daily Tasks"
  );
  return { tasks: state.dailyTasks, ...dailyList };
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
