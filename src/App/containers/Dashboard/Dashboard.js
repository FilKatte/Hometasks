import React from "react";
import styles from "./Dashboard.module.css";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Switch>
          <Route exact path="/dashboard/news" component={News} />
          <Route exact path="/dashboard/important" component={Important} />
        </Switch>
      </div>
    );
  }
}

const News = () => {
  return <div>NEWS</div>;
};

const Important = () => {
  return <div>Important</div>;
};

export default Dashboard;
