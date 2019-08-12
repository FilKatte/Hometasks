import React, { PureComponent } from "react";
//import Header from "../../containers/Dashboard/components/Header";
import Search from "../../containers/Search";
import { withRouter, Redirect, Switch, Route } from "react-router-dom";
//import styles from "./AppRouter.module.css";

class AppRouter extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Redirect path="/*" to="/search" />
       </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);