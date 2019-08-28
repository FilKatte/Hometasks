import React from "react";
import "./App.css";
import bondImage from "./assets/bond.jpg";

const formData = {
  firstname: {
    value: "james",
    error: "Имя указано не верно",
    errorEmpty: "Нужно указать имя"
  },
  lastname: {
    value: "bond",
    error: "Фамилия указана не верно",
    errorEmpty: "Нужно указать фамилию"
  },
  password: {
    value: "007",
    error: "Пароль указан не верно",
    errorEmpty: "Нужно указать пароль"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      isValidate: false,
      values: { firstname: "", lastname: "", password: "" }
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    if (this.textInput.current) {
      console.log(this.textInput.current);
      this.textInput.current.focus();
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
      } else if (this.state.values[key].toLowerCase() !== formData[key].value) {
        errors[key] = formData[key].error;
      }
    });
    this.setState({
      errors,
      isValidate: Object.keys(errors).length === 0
    });
  };

  render() {
    const { isValidate, values, errors } = this.state;
    return (
      <div className="container">
        {!isValidate ? (
          <form className="content" onSubmit={this.handleSubmit}>
            <h1 className="title">Введите свои данные агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                type="text"
                className="field__input field-input t-input-firstname"
                name="firstname"
                value={values["firstname"]}
                onChange={this.changeInput}
                ref={this.textInput}
              />
              <span className="error">{errors["firstname"]}</span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                type="text"
                className="field__input field-input t-input-lastname"
                name="lastname"
                value={values["lastname"]}
                onChange={this.changeInput}
              />
              <span className="error">{errors["lastname"]}</span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Пароль</span>
              </label>
              <input
                autoComplete="off"
                type="password"
                className="field__input field-input t-input-password"
                name="password"
                value={values["password"]}
                onChange={this.changeInput}
              />
              <span className="error">{errors["password"]}</span>
            </p>
            <div className="form__buttons">
              <input
                className="button t-submit"
                type="submit"
                value="Проверить"
              />
            </div>
          </form>
        ) : (
          <img src={bondImage} alt="bond approve" className="icon" />
        )}
      </div>
    );
  }
}

export default App;
