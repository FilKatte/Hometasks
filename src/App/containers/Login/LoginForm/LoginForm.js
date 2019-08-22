import React from "react";
import { withFormik } from "formik";
import styles from "./LoginForm.module.css";
import Input from "../../../shared/Input";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const formikEnhancer = withFormik({
  enableReinitialize: true,
  validate: values => {
    const errors = {};
    const { username, password } = values;

    if (!username) {
      errors.username = "login_validate_error";
    }
    if (!password) {
      errors.password = "login_validate_error";
    }

    return errors;
  },
  mapPropsToValues: () => {
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
      <p className={styles.loading__text}>
        {" "}
        <FormattedMessage id="loader" />
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className={styles.loginForm__form}>
      <p className={styles.loginForm__title}>
        <FormattedMessage id="login_title" />
      </p>
      <div>
        <Input
          type="email"
          id="username"
          label="login_label_username"
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
          label="login_label_password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          error={errors.password || ""}
        />
      </div>
      {failure && (
        <p className={styles.error}>
          {" "}
          <FormattedMessage id="login_error" />
        </p>
      )}

      <Button variant="outlined" color="primary" type="submit">
        <FormattedMessage id="login_button_text" />
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
