import React from "react";
import { Dropdown, Form } from "semantic-ui-react";

const TagInput = ({ options, tags, change }) => {
  return (
    <Form.Field
      control={Dropdown}
      id="tags"
      label="Tags"
      placeholder="Enter some tags for this task"
      fluid
      search
      selection
      multiple
      allowAdditions
      onAddItem={(_, data) => {
        options.push({
          key: data.value,
          text: data.value,
          value: data.value,
        });
      }}
      options={options}
      onChange={(_, data) => change(data.value)}
      value={tags}
    />
  );
};

export default TagInput;
