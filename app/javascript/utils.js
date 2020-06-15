export const processTags = (tags) => {
  return tags
    .split(", ")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
};

export const matchesSearchTags = (task, searchTags) => {
  const taskTags = task.tags.split(", ");
  const matchesSearchTags =
    searchTags.length === 0
      ? true
      : searchTags.some((tag) => taskTags.includes(tag));
  return matchesSearchTags;
};

export const matchesSearchKeywords = (task, searchKeywords) => {
  const taskTitle = task.title.toLowerCase();
  const taskDescription = task.description.toLowerCase();
  return (
    taskTitle.includes(searchKeywords) ||
    taskDescription.includes(searchKeywords)
  );
};
