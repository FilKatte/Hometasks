import React, { PureComponent } from "react";
import { withRouter, Redirect, Switch, Route } from "react-router-dom";

class AppRouter extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect path="/dashboard/*" to="/dashboard" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);

const Dashboard = () => <div>Dashboard</div>;
