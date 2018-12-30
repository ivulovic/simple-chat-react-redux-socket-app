import * as ActionTypes from "../constants";

const messagesReducer = (state = {
  messages: [],
  loading: false
}, action) => {
  switch (action.type){
    case ActionTypes.LOAD_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }
    case ActionTypes.ADD_MESSAGE:
    case ActionTypes.MESSAGE_RECEIVED:
      console.log(action)
      return {
      ...state,
        messages: [
          ...state.messages,
          {id:state.messages.length+1, message: action.payload}
       ]
      };
    default: return state;
  }
};

export default messagesReducer;