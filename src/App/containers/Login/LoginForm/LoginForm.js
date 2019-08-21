import React from "react";
import { withFormik } from "formik";
import styles from "./LoginForm.module.css";
import Input from "../../../shared/Input";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const formikEnhancer = withFormik({
  enableReinitialize: true,
  validate: (values, props) => {
    const errors = {};
    const { username, password } = values;

    if (!username) {
      errors.username = "Поле обязательно для заполнения";
    }
    if (!password) {
      errors.password = "Поле обязательно для заполнения";
    }

    return errors;
  },
  mapPropsToValues: props => {
    return {
      username: "",
      password: ""
    };
  },
  handleSubmit: (values, props) => {
    const {
      props: { logIn }
    } = props;

    logIn(values);
  },
  displayName: "LoginForm"
});

const LoginForm = props => {
  const { values, errors, handleChange, handleSubmit, loader, failure } = props;

  return loader ? (
    <div className={styles.search__loading}>
      <div className={styles.search__loader} />
      <p className={styles.loading__text}>Loading</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className={styles.loginForm__form}>
      <p className={styles.loginForm__title}>Войти</p>
      <div>
        <Input
          type="email"
          id="username"
          label="Имя пользователя"
          name="username"
          value={values.username}
          handleChange={handleChange}
          error={errors.username || ""}
        />
      </div>
      <div>
        <Input
          type="password"
          id="password"
          label="Пароль"
          name="password"
          value={values.password}
          handleChange={handleChange}
          error={errors.password || ""}
        />
      </div>
      {failure && (
        <p className={styles.error}>Неверное имя пользователя или пароль</p>
      )}

      <Button variant="outlined" color="primary" type="submit">
        Войти
      </Button>
    </form>
  );
};

export default formikEnhancer(LoginForm);

LoginForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  loader: PropTypes.bool,
  failure: PropTypes.string,
  logIn: PropTypes.func
};
