import Select from "react-select";
import React from "react";
import styles from "./SearchSelect.module.css";
import search from "../../assets/search.png";

class SearchSelect extends React.Component {
  state = {
    selectedOption: null,
    visibility: false
  };

  handleChange = selectedOption => {
    const { filterFilmList } = this.props;
    this.setState({ selectedOption }, () => {
      filterFilmList(selectedOption);
    });
  };

  showSearch = () => {
    const { visibility } = this.state;
    this.setState({
      visibility: !visibility
    });
  };

  render() {
    const { filmsList } = this.props;
    const { selectedOption, visibility } = this.state;

    const options =
      filmsList.length > 0
        ? filmsList.map(obj => {
            return { value: obj.title, label: obj.title };
          })
        : [];

    return (
      <div className={styles.search}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          isClearable={true}
          options={options}
          className={
            visibility
              ? styles.searchSelect + " " + styles.active
              : styles.searchSelect
          }
        />
        <img
          className={styles.search__icon}
          src={search}
          alt="search"
          onClick={this.showSearch}
        />
      </div>
    );
  }
}

export default SearchSelect;
