import React, { PureComponent } from "react";
import Header from "../../containers/Dashboard/components/Header";

import Dashboard from "../../containers/Dashboard";
import { withRouter, Redirect, Switch, Route } from "react-router-dom";
import styles from "./AppRouter.module.css";

class AppRouter extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect path="/dashboard/*" to="/dashboard/allNews" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
