import React from "react";
import styles from "./Elect.module.css";

class Elect extends React.Component {
  render() {
    return (
      <div className={styles.news}>
        <div className="container">
          <div className={styles.news__content}>Elect</div>
        </div>
      </div>
    );
  }
}

export default Elect;
