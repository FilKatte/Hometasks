import React from "react";
import { connect } from "react-redux";
import { getAddressList } from "../store/duck";
import { AddressListSelector } from "../store/selectors";
import { getRoute } from "../store/duck";
import TaxiForm from "./TaxiForm";
import styles from "./Taxi.module.css";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    addressList: AddressListSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddressList: () => dispatch(getAddressList()),
    getRoute: values => dispatch(getRoute(values))
  };
};

class Taxi extends React.Component {
  componentDidMount() {
    const { getAddressList } = this.props;
    getAddressList();
  }
  render() {
    const { addressList, getRoute, addLayerRoute } = this.props;

    return (
      <div className={styles.taxi}>
        <p className={styles.taxi__title}>Вызов такси</p>
        <TaxiForm
          addressList={addressList}
          getRoute={getRoute}
          addLayerRoute={addLayerRoute}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Taxi);

Taxi.propTypes = {
  getAddressList: PropTypes.func,
  getRoute: PropTypes.func,
  addLayerRoute: PropTypes.func,
  addressList: PropTypes.array
};
