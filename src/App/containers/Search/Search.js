import React from "react";
import { connect } from "react-redux";
import { searchRequest } from "./store/duck";
import { searchSuccessSelector,searchValueSelector,resultSuccessSelector } from "./store/selectors";
import ShowPreview from "../ShowPreview";
import styles from "./Search.module.css";

const mapStateToProp = state => {
  return {
    success : searchSuccessSelector(state),
    loading : searchValueSelector(state),
    result : resultSuccessSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: (query) => dispatch(searchRequest(query))
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
    event.preventDefault();
    this.props.searchRequest(this.state.value);
    this.setState({ value: "" });
  };
 
  render() {
  const {value} = this.state;
  const {success,loading,result} = this.props;
    return (
      <div className={styles.search}>
        <form onSubmit={this.handleSubmit} className={styles.search__form}>
	        <input onChange={this.handleChange} value={value} className={styles.search__input} type="text" name="query" placeholder="Название сериала"/>
	        <button className={styles.search__button}>Найти</button>
	      </form>
        {loading && <div>Louding</div>}
        <ShowPreview data={success} result={result}/>
      </div>
      
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Search);