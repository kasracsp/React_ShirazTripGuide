import { combineReducers } from "redux";
import userReducers from "./user/userReducers";

const rootReducers=combineReducers({
  userState:userReducers,
})

export default rootReducers