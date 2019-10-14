import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { isLoginSelector } from "./store/selectors";
import { checkIsLogin } from "./store/duck";
import Login from "./containers/Login";
import AppRouter from "./components/AppRouter";
import "./App.css";

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
          <PrivateRoute
            path="/dashboard"
            permited={isLogin}
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
