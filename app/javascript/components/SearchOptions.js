import React from "react";
import { Input, Dropdown, Radio } from "semantic-ui-react";
import { connect } from "react-redux";
import { viewCompleted } from "./../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    toggleViewCompleted: () => dispatch(viewCompleted),
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
      <Dropdown
        placeholder="Filter Tasks"
        multiple
        search
        selection
        options={props.tagOptions}
        onChange={(event, data) => props.updateSearchTags(data.value)}
      />
      <Radio
        toggle
        label="View completed tasks"
        onChange={props.toggleViewCompleted}
      />
    </div>
  );
};

const SearchOptions = connect(null, mapDispatchToProps)(ConnectedSearchOptions);

export default SearchOptions;
