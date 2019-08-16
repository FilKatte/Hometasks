import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./containers/Profile";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/map" component={Map} />
          <Route path="/dashboard/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;

const Map = () => <p>Map</p>;
