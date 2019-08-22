import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { FormattedMessage } from "react-intl";

const Input = props => {
  const {
    error,
    handleChange,
    type,
    label,
    value,
    name,
    id,
    helperText,
    maxLength,
    mask
  } = props;

  const classNameError = error
    ? classNames(styles.field__input, styles.field__input__error)
    : classNames(styles.field__input);

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.field__label}>
        <InputMask
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          error={error || ""}
          placeholder="&nbsp;"
          className={classNameError}
          maxLength={maxLength}
          mask={mask}
        />
        <span className={styles.label}>
          {" "}
          <FormattedMessage id={label} />
        </span>
        <span className={styles.border} />
      </label>

      {error ? (
        <p className={styles.error}>
          <FormattedMessage id={error} />
        </p>
      ) : (
        <p className={styles.helperText}>
          {helperText && <FormattedMessage id={helperText} />}
        </p>
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
