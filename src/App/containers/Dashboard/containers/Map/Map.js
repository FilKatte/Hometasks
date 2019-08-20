import React from "react";
import { connect } from "react-redux";
import { nameSelector } from "../Profile/store/selectors";
import { NavLink } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "@material-ui/core/Button";
import Taxi from "./Taxi";

const mapStateToProps = state => {
  return {
    name: nameSelector(state)
  };
};

class Map extends React.Component {
  //   map = null;
  //   mapContainer = React.createRef();

  //   componentDidMount() {
  //     mapboxgl.accessToken =
  //       "pk.eyJ1IjoiZmlsbGthdGUiLCJhIjoiY2p6Y3EwaXN5MDUwOTNpbXFkbXFzd3lvZSJ9.mJe55mDC-M1Up8Mz51vBdQ";
  //     this.map = new mapboxgl.Map({
  //       container: this.mapContainer.current,
  //       style: "mapbox://styles/mapbox/streets-v9",
  //       center: [30.2656504, 59.8029126],
  //       zoom: 15
  //     });
  //   }

  //   componentWillUnmount() {
  //     this.map.remove();
  //   }

  render() {
    const { name } = this.props;

    return (
      <div className={styles.map}>
        {/* <div ref={this.mapContainer} /> */}
        <div className={styles.map__content}>
          {!name ? (
            <div>
              <p className={styles.map__title}>Заполните платежные данные</p>
              <p className={styles.map__text}>
                Укажите информацию о банковской карте, чтобы сделать заказ.
              </p>
              <NavLink to="/dashboard/profile">
                <Button variant="outlined" color="primary">
                  Перейти в профиль
                </Button>
              </NavLink>
            </div>
          ) : (
            <Taxi />
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Map);
