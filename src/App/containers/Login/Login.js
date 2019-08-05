import React from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

class Login extends React.Component {
  addLogin = () => {
    const isAuth = true;
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  };
  render() {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    if (isAuth) {
      return <Redirect to="/public" />;
    } else {
      return (
        <section className="login">
          <div className="container">
            <div className="login__content">
              <form className="login__form">
                <p className="login__title">Введите данные</p>
                <label htmlFor="login">Логин</label>
                <label htmlFor="password">Пароль</label>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button onClick={this.addLogin}>Log in</button>
              </form>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Login;
