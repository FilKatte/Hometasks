import React from "react";
import "./App.css";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { getApiKeySelector } from "./store/selectors";
import { connect } from "react-redux";
import AppRouter from "./components/AppRouter";
import Login from "./containers/Login";

const mapStateToProps = state => {
  return {
    apiKey: getApiKeySelector(state)
  };
};

class App extends React.Component {
  render() {
    const { apiKey } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            exact
            path="/search"
            permited={apiKey}
            component={AppRouter}
          />
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(App);

const PrivateRoute = ({ component: Component, permited, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      permited ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
