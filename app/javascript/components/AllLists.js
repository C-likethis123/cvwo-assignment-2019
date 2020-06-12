import React from "react";
import List from "./List";

const AllLists = (props) => {
  return (
    <div className="list-display">
      {props.lists.map((list) => {
        return (
          <List key={list.id} id={list.id} title={list.title} {...props} />
        );
      })}
    </div>
  );
};

export default AllLists;
