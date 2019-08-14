import React from "react";
import { connect } from "react-redux";
import { searchRequest } from "./store/duck";
import {
  searchSuccessSelector,
  searchValueSelector,
  successNothingSelector
} from "./store/selectors";
import ShowPreview from "../ShowPreview";
import styles from "./Search.module.css";

const mapStateToProp = state => {
  return {
    success: searchSuccessSelector(state),
    loading: searchValueSelector(state),
    successNothing: successNothingSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: query => dispatch(searchRequest(query))
  };
};

class Search extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { searchRequest } = this.props;
    const { value } = this.state;
    event.preventDefault();
    searchRequest(value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    const { success, loading, successNothing } = this.props;
    return loading ? (
      <div className={styles.search__loading}>
        <div className={styles.search__loader} />
        <p className={styles.loading__text}>Loading</p>
      </div>
    ) : (
      <div className={styles.search}>
        <form onSubmit={this.handleSubmit} className={styles.search__form}>
          <input
            onChange={this.handleChange}
            value={value}
            className={styles.search__input}
            type="text"
            name="query"
            placeholder="Название сериала"
          />
          <button className={styles.search__button}>Найти</button>
        </form>
        <ShowPreview data={success} successNothing={successNothing} />
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Search);
