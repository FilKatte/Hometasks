import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./containers/Profile";
import Map from "./containers/Map";
import styles from "./Dashboard.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Switch>
          <Route path="/dashboard/map" component={Map} />
          <Route path="/dashboard/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
