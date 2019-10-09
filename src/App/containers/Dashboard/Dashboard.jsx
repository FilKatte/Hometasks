import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Films from "./containers/Films";
import styles from "./Dashboard.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Films} />
          <Route path="/dashboard/films" component={Films} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
