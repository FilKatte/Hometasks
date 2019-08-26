import React from "react";
import { connect } from "react-redux";
import { tripsSelector } from "../store/selectors";
import styles from "./TripsHistory.module.css";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import moment from "moment";

const isEmpty = require("lodash/isEmpty");

const mapStateToProps = state => {
  return {
    trips: tripsSelector(state)
  };
};

class TripsHistory extends React.Component {
  render() {
    const { trips } = this.props;

    return (
      <div className={styles.tripHistory}>
        <div className={styles.tripHistory_content}>
          <div className={styles.tripHistory__title}>
            <FormattedMessage id="tripHistory__title" />
          </div>
          {isEmpty(trips) ? (
            <div className={styles.tripHistory__text_empty}>
              <FormattedMessage id="tripHistory__text" />
            </div>
          ) : (
            <ol className={styles.tripHistory__list}>
              {trips.map((tripsObj, id) => (
                <li key={id} className={styles.tripHistory_item}>
                  <div className={styles.tripHistory__date}>
                    {moment(tripsObj.date).format("DD/MM/YYYY")}
                  </div>

                  <div className={styles.tripHistory__address}>
                    <p className={styles.tripHistory__text}>
                      {tripsObj.start} {String.fromCharCode(8594)}{" "}
                      {tripsObj.end}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TripsHistory);

TripsHistory.propTypes = {
  trips: PropTypes.array
};
