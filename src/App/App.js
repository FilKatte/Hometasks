import React from "react";
import "./App.css";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { isLoginSelector } from "./store/selectors";
import { connect } from "react-redux";
import { checkIsLogin } from "./store/duck";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";

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
          <PublicRoute
            restricted={true}
            isLogin={isLogin}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute
            path="/dashboard"
            isLogin={isLogin}
            component={Dashboard}
          />
          <Redirect path="/dashboard*" to="/dashboard/news" />
        </Switch>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogin ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const PublicRoute = ({
  component: Component,
  restricted,
  isLogin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
