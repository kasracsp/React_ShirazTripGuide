const saveUser = (user) => {
  return {
    type: "SAVE_USER",
    payload: user,
  };
};
const saveUserOnLocal = (user) => {
  return {
    type: "SAVE_USER_ON_LOCAL",
    payload: user,
  };
};
const deleteUserOnLocal = () => {
  return {
    type: "DELETE_USER_ON_LOCAL",
  };
};

export { saveUser, saveUserOnLocal, deleteUserOnLocal };
