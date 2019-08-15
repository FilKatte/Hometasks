import React from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getApiKeySelector } from "../../store/selectors";
import { addIApiKey } from "../../store/duck";

const mapStateToProp = state => {
  return {
    apiKey: getApiKeySelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIApiKey: key => dispatch(addIApiKey(key))
  };
};

const login = {
  value: "82bde984b0f689c1c62f7b37ce4e438a6800a667",
  error: "Login is incorrect",
  errorEmpty: "Enter login"
};

class Login extends React.Component {
  state = {
    errors: "",
    isValidate: false,
    login: ""
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
      login: target.value,
      errors: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let errors = "";

    if (this.state.login === "") {
      errors = login.errorEmpty;
    } else if (this.state.login !== login.value) {
      errors = login.error;
    }

    this.setState(
      {
        errors,
        isValidate: errors
      },
      () => {
        const { addIApiKey } = this.props;
        const { isValidate, login } = this.state;

        if (isValidate === "") {
          addIApiKey(login);
        }
      }
    );
  };

  render() {
    const { login, errors } = this.state;
    const { apiKey } = this.props;
    if (apiKey) {
      return <Redirect to="/search" />;
    }
    return (
      <section className={styles.login}>
        <div className={styles.login__content}>
          <form className={styles.login__form} onSubmit={this.handleSubmit}>
            <h1 className={styles.login__title}>Токен авторизации</h1>
            <p className={styles.login__text}>
              Получить токен нужно на своей странице github, перейдите по{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/settings/tokens"
                className={styles.login__link}
              >
                адресу
              </a>{" "}
              и создать себе токен. Запишите куда нибудь токен, так как после
              создания доступ к нему будет только один раз.
            </p>
            <p className={styles.login__field}>
              <input
                type="text"
                name="login"
                value={login}
                onChange={this.changeInput}
                className={styles.login__input}
                ref={this.loginRef}
                placeholder=" "
              />
              <span className={styles.login__error}>{errors}</span>
            </p>
            <p className={styles.login__text}>После ввода нажмите Enter</p>
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
