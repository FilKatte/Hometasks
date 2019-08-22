import React from "react";
import Select from "react-select";
import styles from "./SelectLanguage.module.css";

class SelectLanguage extends React.Component {
  render() {
    const { value, options, handleChange } = this.props;
    return (
      <Select
        value={value}
        onChange={handleChange}
        options={options}
        className={styles.select}
      />
    );
  }
}
export default SelectLanguage;
