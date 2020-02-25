import React from "react";
import { Input, Dropdown, Radio } from "semantic-ui-react";

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-options">
        <Input
          icon="search"
          placeholder="Search for tasks..."
          onChange={(event, data) =>
            this.props.updateSearchKeywords(data.value)
          }
        />
        <Dropdown
          placeholder="Filter Tasks"
          multiple
          search
          selection
          options={this.props.tagOptions}
          // onClick={this.props.updateTagOptions}
          onChange={(event, data) => this.props.updateSearchTags(data.value)}
        />
        <Radio
          toggle
          label="View completed tasks"
          onChange={this.props.toggleViewCompleted}
        />
      </div>
    );
  }
}

export default SearchOptions;
