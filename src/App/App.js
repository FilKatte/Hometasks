import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Login from "./containers/Login/Login";
import Public from "./containers/Pablic/Public";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      JSON.parse(localStorage.getItem("isAuth")) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/public" component={Public} />
      </Switch>
    );
  }
}

export default App;
