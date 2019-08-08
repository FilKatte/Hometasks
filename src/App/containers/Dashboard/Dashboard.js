import React from "react";
//import styles from "./Dashboard.module.css";
import { Switch, Route } from "react-router-dom";
import AllNews from "../../containers/Dashboard/components/News/AllNews";
import Elect from "../../containers/Dashboard/components/News/Elect";
import Important from "../../containers/Dashboard/components/News/Important";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/allNews" exact component={AllNews} />
          <Route path="/dashboard/elect" exact component={Elect} />
          <Route path="/dashboard/important" exact component={Important} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
