import React from "react";
import { Input, Dropdown } from "semantic-ui-react";

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tagOptions = [
    {
      key: "Important",
      text: "Important",
      value: "Important",
      label: { color: "red", empty: true, circular: true }
    }
  ];

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
          options={this.tagOptions}
          onChange={data => console.log(data.value)}
        />
      </div>
    );
  }
}

export default SearchOptions;
