import React from "react";
import styles from "./CursorFollower.module.css";

class CursorFollower extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY - 70
    });
  };

  render() {
    const { x, y } = this.state;
    return <div className={styles.star} style={{ top: y, left: x }}></div>;
  }
}

export default CursorFollower;
