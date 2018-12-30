import * as types from "../store/constants";

import {loadMessages, messageReceived} from "../store/actions/message.actions";

const setupSocket = (dispatch, username) => {
  let uriLocal = "ws://localhost:8989";
  const socket = new WebSocket(uriLocal);
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.LOAD_MESSAGES,
      messages: []
    }))
  };
  socket.onmessage = (event) => {
    let data = JSON.parse(event.data);
    switch (data.type){
      case types.ADD_MESSAGE:{
        console.log("ovde brt",data);
        dispatch(messageReceived(data.message)); break;
      }
      case types.LOAD_MESSAGES:
        dispatch(loadMessages(data.messages));
        break;
      default: break;
    }
  };
  return socket;
};

export default setupSocket;
