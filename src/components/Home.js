import React from "react";
import {Component} from "react";
import Messages from "../containers/Messages";

export default class Home extends Component{
    render(){
      return (
        <div>
          Home
          <Messages/>
          {/*<img src={require("./../assets/books.png")} alt=""/>*/}
        </div>
      )
    }
}