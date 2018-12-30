import {combineReducers} from "redux";
import messagesReducer from "./messages.reducer";

const reducers = combineReducers({
  messages: messagesReducer
});

export default reducers;