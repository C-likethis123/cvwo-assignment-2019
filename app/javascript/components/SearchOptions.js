import React from "react";
import { Input, Radio } from "semantic-ui-react";
import TagFilter from "./TagFilter";
import { connect } from "react-redux";
import { viewCompleted, updateSearchKeywords } from "./../actions/index";

const mapStateToProps = (state) => {
  return {
    searchTags: state.searchTags,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleViewCompleted: () => dispatch(viewCompleted),
    updateSearchKeywords: (keywords) =>
      dispatch(updateSearchKeywords(keywords)),
  };
};

const ConnectedSearchOptions = (props) => {
  return (
    <div className="search-options">
      <Input
        icon="search"
        placeholder="Search for tasks..."
        onChange={(event, data) => props.updateSearchKeywords(data.value)}
      />
      <TagFilter tags={props.searchTags} />
      <Radio
        toggle
        label="View completed tasks"
        onChange={props.toggleViewCompleted}
      />
    </div>
  );
};

const SearchOptions = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSearchOptions);

export default SearchOptions;
