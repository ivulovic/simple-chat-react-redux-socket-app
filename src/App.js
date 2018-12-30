import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import { browserHistory } from 'react-dom';

import Home from "./components/Home";
import {Menu} from "./components/Menu";
import {NotFound} from "./components/NotFound";
import {Other} from "./components/Other";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return rest.guard  ? renderMergedProps(component, routeProps, rest) : <NotFound/>;
    }}/>
  );
}

export default class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter history={browserHistory}>
          <div>
            <Menu />
            <Switch>
              <Route exact path="/" component={Home}/>
              <PropsRoute guard={""} path="/other" component={Other}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}