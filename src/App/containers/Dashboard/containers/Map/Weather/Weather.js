import React from "react";
import { connect } from "react-redux";
import { WeatherSelector } from "../store/selectors";
import { getWeather } from "../store/duck";

const isEmpty = require("lodash/isEmpty");

const mapStateToProps = state => {
  return {
    data: WeatherSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: () => dispatch(getWeather())
  };
};

class Weather extends React.Component {
  render() {
    const { data, getWeather } = this.props;
    getWeather();
    return <div>{!isEmpty(data) && data.main.temp}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);

Weather.propTypes = {};
