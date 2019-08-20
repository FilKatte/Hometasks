import React from "react";
import Select from "react-select";
import styles from "./InputSelect.module.css";

class InputSelect extends React.Component {
  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value.value);
  };
  render() {
    const { error, values, name, id, placeholder, options } = this.props;

    return (
      <div className={styles.input_field}>
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder={placeholder}
          id={id}
          name={name}
          value={values}
          onChange={this.handleChange}
          options={options}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
}
export default InputSelect;
