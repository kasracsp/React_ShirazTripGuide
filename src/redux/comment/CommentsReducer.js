const initialState = {
  comments: [],
};

const commentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_COMMENTS":
      return {
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducers