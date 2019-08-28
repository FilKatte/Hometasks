import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logIn } from "../../store/duck";
import {
  isLoginSelector,
  errorLoginSelector,
  loaderSelector
} from "../../store/selectors";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";
import PropTypes from "prop-types";

const mapStateToProp = state => {
  return {
    isLogin: isLoginSelector(state),
    failure: errorLoginSelector(state),
    loader: loaderSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: values => dispatch(logIn(values))
  };
};

class Login extends React.Component {
  render() {
    const { isLogin, logIn, loader, failure } = this.props;
    console.log(this.props);

    if (isLogin) {
      return <Redirect path="/login" to="/dashboard/map" />;
    }

    return (
      <div className={styles.login}>
        <LoginForm logIn={logIn} loader={loader} failure={failure} />
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);

Login.propTypes = {
  logIn: PropTypes.func,
  isLogin: PropTypes.bool,
  failure: PropTypes.string,
  loader: PropTypes.bool
};
