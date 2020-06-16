import React from "react";
import { Dropdown, Form } from "semantic-ui-react";
import { connect } from "react-redux";
const mapStateToProps = (state, { tags, change }) => {
  return {
    options: state.tagOptions.map((tag) => ({
      key: tag,
      text: tag,
      value: tag,
    })),
    tags,
    change,
  };
};

const ConnectedTagInput = ({ options, tags, change }) => {
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
        tagsToChooseFrom.push({
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

const TagInput = connect(mapStateToProps)(ConnectedTagInput);
export default TagInput;
