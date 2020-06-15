import React, { useEffect } from "react";
import ConnectedList from "./ConnectedList";
import { connect } from "react-redux";
import { loadLists } from "../actions";

const isDailies = (list) => list.title === "Daily Tasks";
const mapStateToProps = (state) => {
  return { lists: state.lists };
};
const mapDispatchToProps = (dispatch) => ({
  loadLists: () => dispatch(loadLists()),
});

const AllLists = ({ lists, loadLists }) => {
  useEffect(loadLists, lists.length > 0);
  return (
    <div className="list-display">
      {lists.map((list) => (
        <ConnectedList key={list.id} isDailies={isDailies(list)} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllLists);
