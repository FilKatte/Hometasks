import React from "react";
import { connect } from "react-redux";
import { WeatherSelector } from "../store/selectors";
import { getWeather } from "../store/duck";
import styles from "./Weather.module.css";

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
  componentDidMount() {
    const { getWeather } = this.props;
    getWeather();
  }
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      !isEmpty(data) && (
        <div className={styles.weather}>
          <div className={styles.weather__title}> {data.name}</div>
          <div className={styles.weather__info}>
            <img
              src={`http://openweathermap.org/img/wn/${
                data.weather[0].icon
              }@2x.png`}
              alt="Weather"
              className={styles.info__icon}
            />
            <div>
              <p className={styles.info__temp}>
                {data.main.temp.toFixed()} {String.fromCharCode(176, 67)}
              </p>
              <p className={styles.info__text}>{data.weather[0].main}</p>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);

Weather.propTypes = {};
