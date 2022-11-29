const saveComments = (comments) => {
  return {
    type: "SAVE_COMMENTS",
    payload: comments,
  };
};

export { saveComments };
