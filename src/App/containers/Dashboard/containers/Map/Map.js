import React from "react";
import { connect } from "react-redux";
import { nameSelector } from "../Profile/store/selectors";
import { RouteSelector } from "../Map/store/selectors";
import { NavLink } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "@material-ui/core/Button";
import Taxi from "./Taxi";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    name: nameSelector(state),
    route: RouteSelector(state)
  };
};

class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZmlsbGthdGUiLCJhIjoiY2p6Y3EwaXN5MDUwOTNpbXFkbXFzd3lvZSJ9.mJe55mDC-M1Up8Mz51vBdQ";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.27744, 59.799996],
      zoom: 15
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  addLayerRoute = () => {
    const { route } = this.props;

    if (this.map && this.map.getLayer("route")) {
      this.map.removeLayer("route");
    }

    if (this.map && this.map.getSource("route")) {
      this.map.removeSource("route");
    }

    this.map &&
      this.map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: route
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "red",
          "line-width": 8
        }
      });

    this.map &&
      this.map.flyTo({
        center: route[0],
        zoom: 13,
        speed: 0.5,
        curve: 2
      });
  };

  render() {
    const { name } = this.props;

    return (
      <div>
        <div ref={this.mapContainer} className={styles.map} />
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
            <Taxi addLayerRoute={this.addLayerRoute} />
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

Map.propTypes = {
  name: PropTypes.string,
  route: PropTypes.array
};
