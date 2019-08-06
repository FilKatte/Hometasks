import React from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { logIn } from "../../store/duck";
import logo from "./assets/logo.svg";

const mapStateToProp = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(logIn())
  };
};

class Login extends React.Component {
  loginRef = React.createRef();

  componentDidMount() {
    if (this.loginRef.current) {
      this.loginRef.current.focus();
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { logIn } = this.props;
    logIn();
  };
  render() {
    return (
      <section className={styles.login}>
        <div onSubmit={this.handleSubmit} className={styles.login__content}>
          <img className={styles.login__icon} src={logo} alt="SML logo" />
          <form className={styles.login__form}>
            <p className={styles.login__title}>Sign in</p>
            <label htmlFor="email" className={styles.login__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              className={styles.login__input}
              ref={this.loginRef}
            />
            <label htmlFor="password" className={styles.login__label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              className={styles.login__input}
            />
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
