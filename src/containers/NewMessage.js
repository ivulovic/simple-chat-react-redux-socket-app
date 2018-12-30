import React from "react";
import {connect} from "react-redux";
import * as MessageActions from "../store/actions/message.actions";

class NewMessage extends React.Component{

  addMessage(event){
    event.preventDefault();
    let value = document.getElementById("message").value;
    if(value && value.trim()){
      document.getElementById("form").reset();
      return this.props.addMessage(value);
    }
  }
  render(){

    return (
      <div>
        <h1>
         New Message
        </h1>
        <form id="form" onSubmit={(e)=>this.addMessage(e)} autoComplete="off">
          <input type="text" id={"message"}/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(MessageActions.addMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
