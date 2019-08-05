import React from "react";
import { Redirect } from "react-router-dom";

class Public extends React.Component {
  state = {
    isAuth: JSON.parse(localStorage.getItem("isAuth"))
  };

  exitLogin = () => {
    const isAuth = false;
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
    this.setState({ isAuth: JSON.parse(localStorage.getItem("isAuth")) });
  };
  render() {
    const { isAuth } = this.state;
    if (isAuth) {
      return (
        <section>
          <p>Главная</p>
          <button onClick={this.exitLogin}>X</button>
        </section>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default Public;
