import React from "react";
import List from "./List";
import { addToDo, updateToDo } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const [dailyList] = state.lists.filter(
    (list) => list.title === "Daily Tasks"
  );
  return { tasks: state.dailyTasks, ...dailyList };
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (todo) => dispatch(addToDo(todo, true)),
  updateTask: (todo) => dispatch(updateToDo(todo, true)),
});
const ConnectedDailyList = (props) => {
  return <List isDailies={true} title="Daily Tasks" {...props} />;
};

const DailyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDailyList);
export default DailyList;
