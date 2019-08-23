import React from "react";
import styles from "./InputDate.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { registerLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import ru from "date-fns/locale/ru";
registerLocale("es", es);
registerLocale("ru", ru);

class InputDate extends React.Component {
  state = {
    startDate: new Date()
  };
  componentDidMount() {
    const { value } = this.props;

    value && this.setState({ startDate: new Date(value) });
  }
  handleChange = date => {
    const { onChange, name } = this.props;
    onChange(name, date);
    this.setState({
      startDate: date
    });
  };

  render() {
    const { error, name, id, helperText, locale } = this.props;

    const classNameError = error
      ? classNames(styles.field__input, styles.field__input__error)
      : classNames(styles.field__input);

    return (
      <div className={styles.field}>
        <label htmlFor={id} className={styles.field__label}>
          <DatePicker
            locale={locale}
            selected={this.state.startDate}
            onChange={this.handleChange}
            id={id}
            name={name}
            error={error || ""}
            placeholder="&nbsp;"
            className={classNameError}
          />
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
  }
}

export default InputDate;

InputDate.propTypes = {
  error: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  id: PropTypes.string,
  helperText: PropTypes.string,
  locale: PropTypes.string
};
