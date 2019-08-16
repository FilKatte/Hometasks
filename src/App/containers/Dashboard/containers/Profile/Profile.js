import React from "react";
import { connect } from "react-redux";
import { addData } from "./store/duck";
import {
  nameSelector,
  numberSelector,
  dateSelector,
  cvvSelector
} from "./store/selectors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Profile.module.css";

const mapStateToProp = state => {
  return {
    name: nameSelector(state),
    number: numberSelector(state),
    date: dateSelector(state),
    cvv: cvvSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addData: data => dispatch(addData(data))
  };
};

class Profile extends React.Component {
  state = {
    values: { name: "", number: "", date: "", cvv: "" },
    errors: {
      name: "",
      number: "",
      date: "",
      cvv: ""
    }
  };

  nameRef = React.createRef();

  componentDidMount() {
    if (this.nameRef.current) {
      this.nameRef.current.focus();
    }
  }

  changeInput = e => {
    const target = e.target;
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        const validNameRegex = RegExp(/^([a-zA-Z]+$)/);
        errors.name = validNameRegex.test(value)
          ? ""
          : "Может содержать только латинские буквы";
        break;
      case "number":
        errors.number = value.length > 16 ? "Номер состоит из 16 цифр" : "";
        break;
      case "cvv":
        errors.cvv = value.length > 3 ? "CVV состоит из 3 цифр" : "";
        break;
      default:
        break;
    }

    this.setState({
      values: { ...this.state.values, ...{ [target.name]: target.value } },
      errors
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { values } = this.state;
    const { addData } = this.props;

    addData(values);
  };

  render() {
    const { values } = this.state;
    const { errors } = this.state;

    return (
      <div className={styles.profile}>
        <form onSubmit={this.handleSubmit} className={styles.profile__form}>
          <p className={styles.profile__title}>Войти</p>
          <div className={styles.profile__field}>
            <TextField
              required
              type="text"
              pattern="^[a-zA-Z]+$"
              id="standard-full-width"
              label="Имя владельца"
              name="name"
              value={values.name}
              onChange={this.changeInput}
              ref={this.nameRef}
              className={styles.profile__input}
            />
          </div>
          {errors.name.length > 0 && (
            <span className={styles.profile__error}>{errors.name}</span>
          )}

          <div className={styles.profile__field}>
            <TextField
              required
              type="number"
              min="16"
              max="16"
              pattern="^[ 0-9]+$"
              id="standard-dense"
              label="Номер карты"
              name="number"
              value={values.number}
              onChange={this.changeInput}
              className={styles.profile__input}
            />
          </div>
          {errors.number.length > 0 && (
            <span className={styles.profile__error}>{errors.number}</span>
          )}

          <div className={styles.profile__field}>
            <TextField
              required
              id="date"
              label="Дата окончания действия"
              type="date"
              name="date"
              value={values.date}
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.changeInput}
              className={styles.profile__input}
            />
          </div>

          <div className={styles.profile__field}>
            <TextField
              required
              type="number"
              min="3"
              max="3"
              pattern="^[ 0-9]+$"
              id="standard-dense"
              helperText="Last three digits on signature strip"
              label="CVV"
              name="cvv"
              value={values.cvv}
              onChange={this.changeInput}
              className={styles.profile__input}
            />
          </div>
          {errors.cvv.length > 0 && (
            <span className={styles.profile__error}>{errors.cvv}</span>
          )}

          <Button variant="contained" color="primary" type="submit">
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
)(Profile);
