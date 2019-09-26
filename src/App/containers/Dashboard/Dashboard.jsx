import React from "react";
//import { Switch, Route } from "react-router-dom";
import Header from "./containers/Header";

import styles from "./Dashboard.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Header />
        Dashboard
        {/* <Switch>
          <Route path="/dashboard" component={Map} />
          <Route path="/dashboard/profile" component={Profile} />
        </Switch> */}
      </div>
    );
  }
}

export default Dashboard;
