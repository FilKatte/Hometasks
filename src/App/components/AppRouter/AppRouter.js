import React, { PureComponent } from "react";
import Header from "../../containers/Dashboard/components/Header";
import AllNews from "../../containers/Dashboard/components/News/AllNews";
import Dashboard from "../../containers/Dashboard";
import { Switch, Route, Redirect, withRouter, NavLink } from "react-router-dom";
import styles from "./AppRouter.module.css";

class AppRouter extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/allNews" exact component={AllNews} />
          <Route path="/dashboard/elect" exact component={test} />
          <Route path="/dashboard/important" exact component={test} />
        </Switch>
      </div>
    );
  }
}

const test = () => {
  return <div>marked</div>;
};

export default withRouter(AppRouter);
