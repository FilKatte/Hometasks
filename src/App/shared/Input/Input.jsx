import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

const Input = props => {
  const {
    error,
    handleChange,
    type,
    label,
    value,
    name,
    id,
    helperText
  } = props;
  const classNameError = error
    ? classNames(styles.field__input, styles.field__input__error)
    : classNames(styles.field__input);

  return (
    <div className={styles.input_field}>
      <label htmlFor={id} className={styles.field__label}>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          error={error || ""}
          placeholder="&nbsp;"
          className={classNameError}
        />
        <span className={styles.label}> {label}</span>
        <span className={styles.border} />
      </label>

      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <p className={styles.helperText}>{helperText}</p>
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  handleChange: PropTypes.func,
  error: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  helperText: PropTypes.string
};
