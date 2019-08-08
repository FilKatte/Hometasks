import React from "react";
import "./App.css";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { isLoginSelector } from "./store/selectors";
import { connect } from "react-redux";
import { checkIsLogin } from "./store/duck";
import Login from "./containers/Login";
// import Dashboard from "./containers/Dashboard";
import AppRouter from "./components/AppRouter";

const mapStateToProps = state => {
  return {
    isLogin: isLoginSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkIsLogin: () => dispatch(checkIsLogin())
  };
};

class App extends React.Component {
  componentDidMount() {
    const { checkIsLogin } = this.props;
    checkIsLogin();
  }

  render() {
    const { isLogin } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            path="/dashboard"
            permited={isLogin}
            component={AppRouter}
          />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const PrivateRoute = ({ component: Component, permited, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      permited ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
