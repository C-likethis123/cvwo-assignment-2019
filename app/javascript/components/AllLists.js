import React from "react";
import ConnectedList from "./ConnectedList";
import { connect } from "react-redux";

const isDailies = (list) => list.title === "Daily Tasks";
const mapStateToProps = (state) => {
  return { lists: state.lists };
};

const AllLists = ({ lists }) => {
  return (
    <div className="list-display">
      {lists.map((list) => (
        <ConnectedList key={list.id} isDailies={isDailies(list)} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(AllLists);
