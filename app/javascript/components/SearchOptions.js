import React from "react";
import { Input, Dropdown } from "semantic-ui-react";

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-options">
        <Input
          icon="search"
          placeholder="Search for tasks..."
          onChange={(event, data) => this.props.updateSearchKeywords(data.value)}
        />
        <Dropdown
          placeholder="Filter Tasks"
          multiple
          search
          selection
          options={this.props.tagOptions}
          onClick={this.props.updateTagOptions}
          onChange={(event, data) => this.props.updateSearchTags(data.value)}
        />
      </div>
    );
  }
}

export default SearchOptions;
