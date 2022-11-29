import { combineReducers } from "redux";
import commentsReducers from "./comment/CommentsReducer";
import userReducers from "./user/userReducers";

const rootReducers=combineReducers({
  userState:userReducers,
  commentsState:commentsReducers,
})

export default rootReducers