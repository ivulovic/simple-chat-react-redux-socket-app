import * as MessageTypes from "../constants/message.constants";

export const addMessage = (message) => {
  return {
    type: MessageTypes.ADD_MESSAGE,
    payload: message
  }
};

export const messageReceived = (message) => {
  return {
    type: MessageTypes.MESSAGE_RECEIVED,
    payload: message
  }
};

export const loadMessages = (messages) =>{
  return {
    type: MessageTypes.LOAD_MESSAGES,
    payload: messages
  }
};