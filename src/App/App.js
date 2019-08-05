import React from "react";
import { appSelector } from "./store/selectors";
import { connect } from "react-redux";
import { increment } from "./store/duck";
import CurrentFilm from "./containers/CurrentFilm";
import Message from "./containers/Message";

const mapStateToProp = state => {
  return {
    app: appSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment())
  };
};

class App extends React.Component {
  render() {
    const { app, increment } = this.props;
    return (
      <div>
        <Message />
        <hr />
        <CurrentFilm />
        <hr />
        <p>{app.counter}</p>
        <button onClick={() => increment()}>Прибавить единичку</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(App);
