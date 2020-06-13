import React from "react";
import List from "./List";
import { addToDo, updateToDo, deleteToDo } from "../actions";
import { connect } from "react-redux";

const isDailies = false;
const mapStateToProps = (state) => {
  const [oneOffList] = state.lists.filter(
    (list) => list.title !== "Daily Tasks"
  );
  return { tasks: state.oneOffTasks, ...oneOffList };
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (todo) => dispatch(addToDo(todo, isDailies)),
  updateTask: (todo) => dispatch(updateToDo(todo, isDailies)),
  deleteTask: (todo) => dispatch(deleteToDo(todo, isDailies)),
});
const ConnectedOneOffList = (props) => {
  return <List isDailies={true} title="Daily Tasks" {...props} />;
};

const OneOffList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedOneOffList);
export default OneOffList;
