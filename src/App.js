import React from "react";
import "./App.css";
import People from "./People";

class App extends React.Component {
  render() {
    return (
      <div>
        App
        <People data={"people"} />
        <People data={"planets"} />
      </div>
    );
  }
}

export default App;
