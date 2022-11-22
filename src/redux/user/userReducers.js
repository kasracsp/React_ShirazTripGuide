const initialState = {
  user: {},
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        user: action.payload,
      };
    case "SAVE_USER_ON_LOCAL":
      window.localStorage.setItem("user", JSON.stringify({...action.payload}));
      return {
        user: {...action.payload},
      };
    case "DELETE_USER_ON_LOCAL":
      window.localStorage.removeItem("user");
      return {
        user: {},
      };
    default:
      return state;
  }
};

export default userReducers