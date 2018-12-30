import {takeEvery} from "redux-saga/effects";
import * as types from "../constants/message.constants";

const messageEffects = function* messageEffects(args) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = args.user;
    args.socket.send(JSON.stringify(action));
  });
};

export default messageEffects;