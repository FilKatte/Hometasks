import React from "react";
import "./App.css";

const credentionals = {
  name: "james",
  surname: "bond",
  password: "007"
};

class App extends React.Component {
  state = {
    name: "",
    surname: "",
    password: "",
    errorName: "",
    errorSurname: "",
    errorPassword: "",
    isConfirmed: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, surname, password } = this.state;

    this.setState({
      errorName: "",
      errorSurname: "",
      errorPassword: ""
    });

    if (
      name == credentionals.name &&
      surname == credentionals.surname &&
      password == credentionals.password
    ) {
      alert("Все данные верны");
      this.setState({
        name: "",
        surname: "",
        password: "",
        isConfirmed: true
      });
    }

    if (name) {
      if (name !== credentionals.name) {
        this.setState({ name: "", errorName: "Имя указано не верно" });
      }
    } else {
      this.setState({ errorName: "Нужно указать имя" });
    }

    if (surname) {
      if (surname !== credentionals.surname) {
        this.setState({
          errorSurname: "Фамилия указана не верно"
        });
      }
    } else {
      this.setState({ errorSurname: "Нужно указать фамилию" });
    }

    if (password) {
      if (password !== credentionals.password) {
        this.setState({
          password: "",
          errorPassword: "Пароль указан не верно"
        });
      }
    } else {
      this.setState({ errorPassword: "Нужно указать пароль" });
    }
  };

  render() {
    const { errorName, errorSurname, errorPassword, isConfirmed } = this.state;

    return (
      <div className="container">
        <div className="content">
          {isConfirmed ? (
            <div className="confirmed">
              <img
                src={require("./assets/bond.jpg")}
                alt="Bond"
                className="icon"
              />
            </div>
          ) : (
            <form onSubmit={this.handleSubmit} className="formAgent">
              <h1 className="title">Введите свои данные, агент</h1>
              <div className="formContent">
                <p className="data">
                  <label htmlFor="name">Имя</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="error"> {errorName}</p>
                <p className="data">
                  <label htmlFor="surname">Фамилия</label>
                  <input
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="error"> {errorSurname}</p>
                <p className="data">
                  <label htmlFor="password">Пароль</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="error"> {errorPassword}</p>

                <input type="submit" value="Проверить" className="control" />
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default App;
