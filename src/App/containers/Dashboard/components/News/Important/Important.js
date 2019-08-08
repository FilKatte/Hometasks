import React from "react";
import styles from "./Important.module.css";

class Important extends React.Component {
  render() {
    return (
      <div className={styles.news}>
        <div className="container">
          <div className={styles.news__content}>Important</div>
        </div>
      </div>
    );
  }
}

export default Important;
