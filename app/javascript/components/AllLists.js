import React from "react";
import List from "./List";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { lists: state.lists };
};

const AllLists = ({ lists }) => {
  return (
    <div className="list-display">
      {lists.map((list) => {
        return <List key={list.id} id={list.id} title={list.title} />;
      })}
    </div>
  );
};

export default connect(mapStateToProps)(AllLists);
