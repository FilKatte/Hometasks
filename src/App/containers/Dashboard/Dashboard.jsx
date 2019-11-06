import React from "react";
import { Switch, Route } from "react-router-dom";
import Films from "./containers/Films";
import People from "./containers/People";
import CursorFollower from "../../../shared/CursorFollower";
import styles from "./Dashboard.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <div className={styles.content}>
          <Switch>
            <Route path="/dashboard/films" component={Films} />
            <Route path="/dashboard/people" component={People} />
            <Route path="/dashboard" component={Films} />
          </Switch>
        </div>
        <CursorFollower />
      </div>
    );
  }
}

export default Dashboard;
