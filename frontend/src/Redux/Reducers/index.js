import { combineReducers } from "redux";
import toastReducer from "./ToastReducer";
import userReducer from "./UserReducer";
export default combineReducers({
  toast: toastReducer,
  user: userReducer,
});
