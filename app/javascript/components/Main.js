import React from "react";
import AllLists from "./AllLists";
import { hot } from "react-hot-loader";
import SearchOptions from "./SearchOptions";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      searchKeywords: "",
      searchTags: [],
      tagOptions: [],
      lists: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/lists.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState((prevProps, prevState) => {
          return { lists: data };
        });
      });
  }

  updateSearchKeywords = searchKeywords => {
    this.setState((prevProps, prevState) => {
      return { searchKeywords: searchKeywords };
    });
  };

  updateSearchTags = searchTags => {
    this.setState((prevProps, prevState) => {
      return { searchTags: searchTags };
    });
  };

  processTags = tags => {
    return tags
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag !== "");
  };

  updateTagOptions = () => {
    let tagOptions = [];
    this.state.lists.forEach(list => {
      fetch(`/api/v1/lists/${list.id}/tasks.json`)
        .then(response => response.json())
        .then(data => {
          data.forEach(task => {
            let tagsFromTasks = this.processTags(task.tags);
            tagOptions = tagOptions.concat(tagsFromTasks);
          });
          return tagOptions;
        })
        .then(tagOptions => {
          tagOptions = [...new Set(tagOptions)];
          tagOptions = tagOptions.map(tag => ({
            key: tag,
            value: tag,
            text: tag,
            label: { color: "red", empty: true, circular: true }
          }));

          this.setState(() => ({
              tagOptions: tagOptions
            }));
        });
    });
  };

  toggleViewCompleted = () => {
    this.setState(prevState => ({
      viewCompleted: !prevState.viewCompleted
    }));
  };

  render() {
    return (
      <div>
        <h1>To do: List of tasks</h1>
        <SearchOptions
          toggleViewCompleted={this.toggleViewCompleted}
          updateSearchKeywords={this.updateSearchKeywords}
          updateSearchTags={this.updateSearchTags}
          updateTagOptions={this.updateTagOptions}
          tagOptions={this.state.tagOptions}
        />
        <AllLists
          searchKeywords={this.state.searchKeywords}
          searchTags={this.state.searchTags}
          lists={this.state.lists}
          viewCompleted={this.state.viewCompleted}
        />
      </div>
    );
  }
}

export default hot(module)(Main);
