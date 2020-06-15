export const processTags = (tags) => {
  return tags
    .split(", ")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
};
