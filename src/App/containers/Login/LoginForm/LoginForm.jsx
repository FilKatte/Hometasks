import React from "react";
import { withFormik } from "formik";
import styles from "./LoginForm.module.css";

const formData = {
  name: "Kate",
  password: "111"
};

const formikEnhancer = withFormik({
  enableReinitialize: true,
  validate: values => {
    const errors = {};
    const { name, password } = values;

    if (!name) {
      errors.name = "Enter name";
    } else if (name !== formData.name) {
      errors.name = "Name incorrect";
    }

    if (!password) {
      errors.password = "Enter password";
    } else if (password !== formData.password) {
      errors.password = "Password incorrect";
    }

    return errors;
  },
  mapPropsToValues: () => {
    return {
      name: "",
      password: ""
    };
  },
  handleSubmit: (values, props) => {
    const {
      props: { logIn }
    } = props;

    logIn();
  },
  displayName: "LoginForm"
});

const LoginForm = props => {
  const { values, errors, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm__form}>
      <p className={styles.loginForm__title}>Log in</p>
      <div className={styles.loginForm__field}>
        <div className={styles.loginForm__fieldInput}>
          <label htmlFor="name" className={styles.loginForm__text}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={styles.loginForm__input}
          />
        </div>
        <p className={styles.loginForm__error}>{errors.name || ""}</p>
      </div>

      <div className={styles.loginForm__field}>
        <div className={styles.loginForm__fieldInput}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={styles.loginForm__input}
          />
        </div>
        <p className={styles.loginForm__error}>{errors.password || ""}</p>
      </div>

      <button type="submit" className={styles.loginForm__button}>
        Log In
      </button>
    </form>
  );
};

export default formikEnhancer(LoginForm);
