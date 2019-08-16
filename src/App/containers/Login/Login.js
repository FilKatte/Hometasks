import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logIn } from "../../store/duck";
import { isLoginSelector, errorLoginSelector } from "../../store/selectors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Login.module.css";

const mapStateToProp = state => {
  return {
    isLogin: isLoginSelector(state),
    errors: errorLoginSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: values => dispatch(logIn(values))
  };
};

class Login extends React.Component {
  state = {
    errors: "",
    values: { username: "", password: "" }
  };

  usernameRef = React.createRef();

  componentDidMount() {
    if (this.usernameRef.current) {
      this.usernameRef.current.focus();
    }
  }

  changeInput = e => {
    const target = e.target;

    this.setState({
      values: { ...this.state.values, ...{ [target.name]: target.value } }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { values } = this.state;

    this.setState({ values }, () => {
      const { logIn } = this.props;
      const { values } = this.state;

      logIn(values);
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors) {
        this.setState({ errors: "Неверное имя пользователя или пароль" });
      }
    }
  }

  render() {
    const { values, errors } = this.state;
    const { isLogin } = this.props;

    if (isLogin) {
      return <Redirect path="/login" to="/dashboard/map" />;
    }

    return (
      <div className={styles.login}>
        <form onSubmit={this.handleSubmit} className={styles.login__form}>
          <p className={styles.login__title}>Войти</p>
          <div className={styles.login__input}>
            <TextField
              required
              type="email"
              id="standard-dense"
              label="Username"
              name="username"
              value={values.name}
              onChange={this.changeInput}
              ref={this.usernameRef}
            />
          </div>

          <div className={styles.login__input}>
            <TextField
              required
              type="password"
              id="standard-password-input"
              label="Password"
              name="password"
              value={values.name}
              onChange={this.changeInput}
              className={styles.login__input}
            />
          </div>

          <p className={styles.login__error}>{errors}</p>

          <Button variant="outlined" color="primary" type="submit">
            Войти
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);
