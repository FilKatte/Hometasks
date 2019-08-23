import React from "react";
import Select from "react-select";
import styles from "./SelectLanguage.module.css";

const options = [{ value: "ru", label: "RU" }, { value: "en", label: "EN" }];

class SelectLanguage extends React.Component {
  render() {
    const { value, handleChange } = this.props;
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
