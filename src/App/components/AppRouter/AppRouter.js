import React, { PureComponent } from "react";
import { withRouter, Redirect, Switch, Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard";
import Header from "../../containers/Dashboard/components/Header";

class AppRouter extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect path="/dashboard/*" to="/dashboard/map" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
