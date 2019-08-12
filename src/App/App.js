import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    
    return (
         <Switch>
          <Route path="/" component={AppRouter} />
        </Switch>
    );
  }
}

export default App;