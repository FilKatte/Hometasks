import React from "react";
import { withFormik } from "formik";

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
    <form onSubmit={handleSubmit}>
      <p>Log in</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <span>{errors.name || ""}</span>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <span>{errors.password || ""}</span>
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};

export default formikEnhancer(LoginForm);
