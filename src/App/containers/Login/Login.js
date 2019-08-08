import React from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logIn } from "../../store/duck";
import { isLoginSelector } from "../../store/selectors";
import logo from "./assets/logo.svg";

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

const formData = {
  login: {
    value: "filina-kate@mail.ru",
    error: "Login is incorrect",
    errorEmpty: "Enter login"
  },
  password: {
    value: "007",
    error: "Password is incorrect",
    errorEmpty: "Enter password"
  }
};

class Login extends React.Component {
  state = {
    errors: {},
    isValidate: false,
    values: { login: "", password: "" }
  };

  loginRef = React.createRef();

  componentDidMount() {
    if (this.loginRef.current) {
      this.loginRef.current.focus();
    }
  }

  changeInput = e => {
    const target = e.target;

    this.setState({
      values: { ...this.state.values, ...{ [target.name]: target.value } },
      errors: {}
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = {};

    Object.keys(formData).forEach(key => {
      if (this.state.values[key] === "") {
        errors[key] = formData[key].errorEmpty;
      } else if (this.state.values[key] !== formData[key].value) {
        errors[key] = formData[key].error;
      }
    });

    this.setState(
      {
        errors,
        isValidate: Object.keys(errors).length === 0
      },
      () => {
        const { logIn } = this.props;
        const { isValidate } = this.state;

        if (isValidate) {
          logIn();
        }
      }
    );
  };

  render() {
    const { values, errors } = this.state;
    const { isLogin } = this.props;

    if (isLogin) {
      return <Redirect path="/login" to="/dashboard/allNews" />;
    }
    return (
      <section className={styles.login}>
        <div onSubmit={this.handleSubmit} className={styles.login__content}>
          <img className={styles.login__icon} src={logo} alt="SML logo" />
          <form className={styles.login__form}>
            <p className={styles.login__title}>Sign in</p>
            <p className={styles.login__field}>
              <label htmlFor="email" className={styles.login__label}>
                Email
              </label>
              <input
                type="email"
                name="login"
                value={values["login"]}
                onChange={this.changeInput}
                className={styles.login__input}
                ref={this.loginRef}
                placeholder=" "
              />
              <span className={styles.login__error}>{errors["login"]}</span>
            </p>
            <p className={styles.login__field}>
              <label htmlFor="password" className={styles.login__label}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={values["lastname"]}
                onChange={this.changeInput}
                className={styles.login__input}
                placeholder=" "
              />
              <span className={styles.login__error}>{errors["password"]}</span>
            </p>
            <button className={styles.login__button}>Login</button>
          </form>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);
