import React from "react";
import { appSelector } from "./store/selectors";
import { connect } from "react-redux";
import { increment } from "./store/duck";
import { decrement } from "./store/duck";
import { onIncrementAsync } from "./store/duck";

const mapStateToProp = state => {
  return {
    app: appSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    onIncrementAsync: () => dispatch(onIncrementAsync())
  };
};

class App extends React.Component {
  render() {
    const { app, increment, decrement } = this.props;
    return (
      <div>
        <p>Counter {app.counter}</p>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => onIncrementAsync()}>
          Increment after 1 second
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(App);
