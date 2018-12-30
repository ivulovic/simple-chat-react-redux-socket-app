import {applyMiddleware, createStore} from "redux";
import messageEffects from "./store/effects/message.effects";
import createSagaMiddleware from "redux-saga";
import reducers from "./store/reducers";
import setupSocket from "./sockets";

const user = "USER_"+Math.floor(Math.random()*1000000);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const socket = setupSocket(store.dispatch, user);
sagaMiddleware.run(messageEffects, {socket, user});

export default store;