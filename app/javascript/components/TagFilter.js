import React from "react";
import { Dropdown } from "semantic-ui-react";

const TagFilter = ({ tags, updateSearchTags }) => {
  const listOfTags = tags.map((tag) => ({
    key: tag,
    value: tag,
    text: tag,
    label: { color: "red", empty: true, circular: true },
  }));
  return (
    <Dropdown
      placeholder="Filter Tasks"
      multiple
      search
      selection
      options={listOfTags}
      onChange={(_, data) => updateSearchTags(data.value)}
    />
  );
};

export default TagFilter;
