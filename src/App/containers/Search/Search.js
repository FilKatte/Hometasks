import React from "react";
import { connect } from "react-redux";
import { searchRequest } from "./store/duck";
import { searchSuccessSelector,searchValueSelector } from "./store/selectors";
import ShowPreview from "../ShowPreview"

const mapStateToProp = state => {
  return {
    success : searchSuccessSelector(state),
    loading : searchValueSelector(state)
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
  };
 
  render() {
  const {value} = this.state;
  const {success,loading} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
	        <input onChange={this.handleChange} value={value} type="text" name="query" placeholder="Название сериала"/>
	        <button>Найти</button>
	      </form>
        {loading && <div>Louding</div>}
        <ShowPreview data={success}/>
      </div>
      
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Search);