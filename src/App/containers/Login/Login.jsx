import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logIn } from "../../store/duck";
import { isLoginSelector } from "../../store/selectors";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";

const mapStateToProp = state => {
  return {
    isLogin: isLoginSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(logIn())
  };
};

class Login extends React.Component {
  render() {
    const { logIn, isLogin } = this.props;

    if (isLogin) {
      return <Redirect path="/login" to="/dashboard" />;
    }

    return (
      <div className={styles.login}>
        <LoginForm logIn={logIn} />
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);
