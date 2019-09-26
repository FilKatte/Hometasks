import React, { PureComponent } from "react";
import { withRouter, Redirect, Switch, Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard";

class AppRouter extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect path="/dashboard/*" to="/dashboard" />
      </Switch>
    );
  }
}

export default withRouter(AppRouter);
