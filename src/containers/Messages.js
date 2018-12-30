import React from "react";
import {connect} from "react-redux";
import * as MessageActions from "../store/actions/message.actions";
import NewMessage from "./NewMessage";
import {Spinner} from "../components/Spinner";

class Messages extends React.Component{

  render(){
    let messagesList = [];
    this.props.messages.messages.forEach((message, i) => messagesList.push(<p key={i}>{message.message}</p>));
    console.log(this.props.messages)
    return (
      <div>
        <NewMessage/>
        <h1> Your Messages </h1>
        {!messagesList.length && <p>No Messages FOund</p>}
        { messagesList }
        <Spinner spin={this.props.messages.loading}/>
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
    loadMessages: () => {
      dispatch(MessageActions.loadMessages());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
