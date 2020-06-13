import React from "react";
import DailyList from "./DailyList";
import OneOffList from "./OneOffList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { lists: state.lists };
};

const AllLists = () => {
  return (
    <div className="list-display">
      <DailyList />
      <OneOffList />
    </div>
  );
};

export default connect(mapStateToProps)(AllLists);
